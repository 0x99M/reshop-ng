import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../types/product";
import { environment } from "../../../environments/environment";
import { DataState, DataStateFactory } from "../../shared/data-state";

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly url = `${environment.apiUrl}/products`;

  constructor(private state: DataStateFactory) {}

  getAll(): Observable<DataState<Product[]>> {
    return this.state.get<Product[]>(this.url);
  }

  add(p: Omit<Product, 'id'>): Observable<DataState<Product>> {
    return this.state.post<Product>(this.url, p);
  }

  update(id: number, p: Partial<Product>): Observable<DataState<Product>> {
    return this.state.put<Product>(`${this.url}/${id}`, p);
  }

  remove(id: number): Observable<DataState<void>> {
    return this.state.delete<void>(`${this.url}/${id}`);
  }
}