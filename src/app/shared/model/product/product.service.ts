import { Injectable } from '@angular/core';
import {IProduct, Product} from './product';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: BehaviorSubject<Product[]>
  private products$: Observable<Product[]>

  constructor(private http: HttpClient) {
    this.products = new BehaviorSubject([])
    this.products$ = this.products.asObservable()

    this.fetch()
  }

  public fetch(): void {
    this.http.get('http://localhost:3000/products')
      .pipe(
        map((products: IProduct[]) => {
          return products.map((product: IProduct) => new Product(product))
        }),
        tap((products: Product[]) => console.log(`Here we got ${products.length} products!`))
      )
      .subscribe((products: Product[]) => this.products.next(products))
  }

  public getProducts(): Observable<Product[]> {
    return this.products$
  }
}
