import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, concat, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

type Kind = 'loading' | 'ok' | 'err';

export type DataState<T> =
  | { kind: 'loading' }
  | { kind: 'ok'; data: T }
  | { kind: 'err'; error: string };

@Injectable({ providedIn: 'root' })
export class DataStateFactory {
  private http = inject(HttpClient);

  get<T>(url: string): Observable<DataState<T>> {
    return this.build(url, () => this.http.get<T>(url));
  }

  post<T, B = unknown>(url: string, body: B): Observable<DataState<T>> {
    return this.build(url, () => this.http.post<T>(url, body));
  }

  put<T, B = unknown>(url: string, body: B): Observable<DataState<T>> {
    return this.build(url, () => this.http.put<T>(url, body));
  }

  delete<T>(url: string): Observable<DataState<T>> {
    return this.build(url, () => this.http.delete<T>(url));
  }

  private build<T>(
    url: string,
    request: () => Observable<T>
  ): Observable<DataState<T>> {
    return concat(
      of({ kind: 'loading' as const }),
      request().pipe(
        map(data => ({ kind: 'ok' as const, data })),
        catchError((e: HttpErrorResponse) =>
          of({ kind: 'err' as const, error: e.message || 'Request failed' })
        )
      )
    );
  }
}