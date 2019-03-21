import { Injectable } from '@angular/core';
import {IProduct, Product} from './product';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []

  constructor(private http: HttpClient) {
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
      .subscribe((products: Product[]) => this.products = products)
  }

  public getProducts(): Product[] {
    return [...this.products]
  }
}
