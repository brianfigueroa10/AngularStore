import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject, runInInjectionContext, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, tap } from 'rxjs';
import { Product } from '../shared/models/product.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient)
  private readonly _endPoint = environment.apiUrl;
  private readonly _injector = inject(EnvironmentInjector)


  public getProducts() {
    this._http.get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(
        map((products:Product[]) => products.map((products:Product) => ({...products, qty: 1}))),
        tap(
        (data: Product[]) => this.products.set(data)))
    .subscribe();
  }

  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(
        this._http.get<Product>(`${this._endPoint}/products/${id}`)
      )
    );
  }

  constructor() {
    this.getProducts();
   }
}
