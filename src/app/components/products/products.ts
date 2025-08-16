import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../services/products/products-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataState } from '../../shared/data-state';
import { Product } from '../../types/product';
import { IonicModule, ModalController, ToastController } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart/cart-service';

@Component({
  selector: 'products-view',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  private toast = inject(ToastController);
  formBuilder = inject(FormBuilder);
  modal = inject(ModalController);

  vm = toSignal(this.productsService.getAll(), {
    initialValue: { kind: 'loading' } as DataState<Product[]>
  });

  cartItems = toSignal(this.cartService.items$, { initialValue: [] });

  placing = signal(false);

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]]
  });

  onAddProduct() {
    if (this.productForm.valid) {
      const product = Product.from(this.productForm.value);
      this.productsService.add(product).subscribe(() => {
        this.modal.dismiss(undefined, 'confirm');
      });
    }
  }

  addToCart(productId?: number) {
    if (productId === undefined) return;
    this.cartService.increaseItemQuantity(productId);
  }

  removeFromCart(productId?: number) {
    if (productId === undefined) return;
    this.cartService.decreaseItemQuantity(productId);
  }

  getItemQuantity(productId?: number) {
    if (productId === undefined) return 0;
    return this.cartService.getItemQuantity(productId);
  }

  async placeOrder() {
    if (this.cartItems()?.length === 0) return;
    this.placing.set(true);
    this.cartService.placeOrder().subscribe({
      next: () => this.toast.create({ message: 'Order placed', duration: 2000 }).then(t => t.present()),
      error: err => this.toast.create({ message: err.error?.error ?? 'Failed', duration: 3000 }).then(t => t.present()),
      complete: () => this.placing.set(false)
    });
  }
}
