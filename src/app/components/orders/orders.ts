import { Component, inject, Injector, runInInjectionContext, signal, Signal } from '@angular/core';
import { Order } from '../../types/order';
import { OrdersService } from '../../services/orders/orders-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { DataState } from '../../shared/data-state';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { OrderProduct } from '../../types/order-product';
import { distinctUntilChanged, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'orders-view',
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  private authService = inject(AuthService);
  private service = inject(OrdersService);
  modal = inject(ModalController);

  vm = toSignal(this.service.getAll(), {
    initialValue: { kind: 'loading' } as DataState<Order[]>
  });

  selectedOrderId = signal<string | null>(null);

  selectedOrderProducts = toSignal(
    toObservable(this.selectedOrderId).pipe(
      distinctUntilChanged(),
      switchMap(id => {
        if (id) {
          return this.service.getOrderProducts(id);
        }
        return of({ kind: 'loading' } as DataState<OrderProduct[]>);
      })
    ),
    { initialValue: { kind: 'loading' } as DataState<OrderProduct[]> }
  );

  selectOrder(orderId: string | null): void {
    this.selectedOrderId.set(orderId);
  }

  role() {
    return this.authService.getRole();
  }
}
