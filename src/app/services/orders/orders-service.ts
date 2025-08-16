import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataState, DataStateFactory } from '../../shared/data-state';
import { Observable } from 'rxjs';
import { Order } from '../../types/order';
import { OrderProduct } from '../../types/order-product';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly url = `${environment.apiUrl}/orders`;

  constructor(private state: DataStateFactory) { }

  getAll(): Observable<DataState<Order[]>> {
    return this.state.get<Order[]>(this.url);
  }

  getOrderProducts(orderId: string): Observable<DataState<OrderProduct[]>> {
    return this.state.get<OrderProduct[]>(`${this.url}/${orderId}/products`);
  }

  add(order: Omit<Order, 'id'>): Observable<DataState<Order>> {
    return this.state.post<Order>(this.url, order);
  }

  update(id: string, order: Partial<Order>): Observable<DataState<Order>> {
    return this.state.put<Order>(`${this.url}/${id}`, order);
  }

  remove(id: string): Observable<DataState<void>> {
    return this.state.delete<void>(`${this.url}/${id}`);
  }
}
