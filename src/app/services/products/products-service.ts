import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { Product } from "../../types/product";
import { environment } from "../../../environments/environment";
import { DataState, DataStateFactory } from "../../shared/data-state";

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private api = inject(DataStateFactory);
  private readonly url = `${environment.apiUrl}/products`;

  private reload$ = new BehaviorSubject<void>(undefined);

  products$ = this.reload$.pipe(
    switchMap(() => this.api.get<Product[]>(this.url))
  );

  add(product: Product): Observable<DataState<void>> {
    return this.api.post<void>(this.url, product).pipe(
      tap(() => this.reload$.next())
    );
  }

  update(id: number, p: Partial<Product>): Observable<DataState<Product>> {
    return this.api.put<Product>(`${this.url}/${id}`, p).pipe(
      tap(() => this.reload$.next())
    );
  }

  remove(id: number): Observable<DataState<void>> {
    return this.api.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => this.reload$.next())
    );
  }
}