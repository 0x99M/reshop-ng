import { Component, inject } from '@angular/core';
import { Order } from '../../types/order';
import { IonContent, IonList, IonItem, IonButton } from "@ionic/angular/standalone";
import { OrdersService } from '../../services/orders/orders-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataState } from '../../shared/data-state';

@Component({
  selector: 'orders-view',
  imports: [IonContent, IonList, IonItem, IonButton],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  private service = inject(OrdersService);

  vm = toSignal(this.service.getAll(), {
    initialValue: { kind: 'loading' } as DataState<Order[]>
  });
}
