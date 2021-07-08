import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '@core/models/product.model';
import { environment } from '@environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as Sentry from '@sentry/browser';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http
      .get<Product[]>(`${environment.url_api}/products`)
      .pipe(retry(3), catchError(this.handleError));
  }

  getProduct(id: string) {
    return this.http
      .get<Product>(`${environment.url_api}/products/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  createProduct(product: Product) {
    return this.http
      .post<Product>(`${environment.url_api}/products`, product)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http
      .put<Product>(`${environment.url_api}/products/${id}`, changes)
      .pipe(retry(3), catchError(this.handleError));
  }

  deleteProduct(id: string) {
    console.log('here p');
    return this.http
      .delete<Product>(`${environment.url_api}/products/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('sii');
    Sentry.captureException(error);
    return throwError('Something went wrong');
  }
}
