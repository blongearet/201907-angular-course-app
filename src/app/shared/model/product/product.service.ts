import { Injectable } from '@angular/core';
import {IProduct, Product} from './product';
import {HttpClient} from '@angular/common/http';
import {filter, map, tap} from 'rxjs/operators';
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
    // Create a const variable
    this.http
    // Make a GET request to the server
      .get('http://localhost:3000/products')
      // Create a pipe to transform the data
      .pipe(
        // For each event (here only once cause it's an HTTP request) we transform the data
        map((products: IProduct[]) => {
          // From a IProduct[] to a Product[] by instanciate the Product model for each item of the collection
          return products.map((product: IProduct) => new Product(product))
        }),
        // It's a no-op... We just console log some things :)
        tap((products: Product[]) => console.log(`Here we got ${products.length} products!`))
      )
      .subscribe((products: Product[]) => this.products.next(products))
  }

  public getProducts(): Observable<Product[]> {
    return this.products$
  }

  public getProductById(id: number): Observable<Product> {
    // We retrieve Product[]
    return this.products$.pipe(
      // We transform the collection to the product (by ID)
      map((products: Product[]) => {
        // Find the requested product (by ID)
        return products.find((product: Product) => {
          return product.id === id
        })
      }),
      filter(product => product !== undefined)
    )
  }

  public save(product: IProduct) {
    this.http.put(`http://localhost:3000/products/${product.id}`, product)
      .subscribe(product => this.fetch())
  }

}
