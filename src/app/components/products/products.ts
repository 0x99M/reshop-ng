import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products/products-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataState } from '../../shared/data-state';
import { Product } from '../../types/product';
import { IonicModule, ModalController } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'products-view',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  private service = inject(ProductsService);
  formBuilder = inject(FormBuilder);
  modal = inject(ModalController);

  vm = toSignal(this.service.getAll(), {
    initialValue: { kind: 'loading' } as DataState<Product[]>
  });

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]]
  });

  onAddProduct() {
    if (this.productForm.valid) {
      const product = Product.from(this.productForm.value);
      this.service.add(product).subscribe(() => {
        this.modal.dismiss(undefined, 'confirm');
      });
    }
  }
}
