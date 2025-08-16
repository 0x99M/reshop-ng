import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataState, DataStateFactory } from '../../shared/data-state';
import { CartItem } from '../../types/cart-item';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly url = `${environment.apiUrl}/orders`;
  private readonly items = new BehaviorSubject<CartItem[]>([]);

  readonly items$ = this.items.asObservable();
  readonly totalQuantity$ = this.items$.pipe(
    map(items => items.reduce((sum, i) => sum + i.quantity, 0))
  );

  constructor(private api: DataStateFactory) { }

  getItemQuantity(productId: number): number {
    return this.items.value.find(i => i.productId === productId)?.quantity ?? 0;
  }

  private nextState(mutator: (draft: CartItem[]) => void) {
    const draft = [...this.items.value];
    mutator(draft);
    this.items.next(draft);
  }

  increaseItemQuantity(productId: number) {
    this.nextState(items => {
      const item = items.find(i => i.productId === productId);
      if (item) item.quantity++;
      else items.push({ productId, quantity: 1 });
    });
  }

  decreaseItemQuantity(productId: number) {
    this.nextState(items => {
      const idx = items.findIndex(i => i.productId === productId);
      if (idx === -1) return;
      if (items[idx].quantity === 1) items.splice(idx, 1);
      else items[idx].quantity--;
    });
  }

  resetItems() {
    this.items.next([]);
  }

  placeOrder(): Observable<DataState<CartItem[]>> {
    return this.api.post<CartItem[]>(this.url, this.items.value).pipe(
      tap(() => this.resetItems())
    );
  }
}
