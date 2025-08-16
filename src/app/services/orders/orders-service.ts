import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataState, DataStateFactory } from '../../shared/data-state';
import { Observable } from 'rxjs';
import { Order } from '../../types/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly url = `${environment.apiUrl}/orders`;

  constructor(private state: DataStateFactory) { }

  getAll(): Observable<DataState<Order[]>> {
    return this.state.get<Order[]>(this.url);
  }

  add(p: Omit<Order, 'id'>): Observable<DataState<Order>> {
    return this.state.post<Order>(this.url, p);
  }

  update(id: number, p: Partial<Order>): Observable<DataState<Order>> {
    return this.state.put<Order>(`${this.url}/${id}`, p);
  }

  remove(id: number): Observable<DataState<void>> {
    return this.state.delete<void>(`${this.url}/${id}`);
  }
}
