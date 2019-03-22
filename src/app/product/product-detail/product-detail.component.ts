import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../shared/model/product/product';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../shared/model/product/product.service';
import {filter, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  // Our current product information as an Observable
  public product$: Observable<Product>

  constructor(productService: ProductService, route: ActivatedRoute) {
    // First of all, we construct the Observable to get id from url
    // We'll use the paramMap which is a ParamMap
    // cf: https://angular.io/api/router/ParamMap
    const id$ = route.paramMap
      .pipe(
        // We transform the ParamMap into a string which is the id
        map((paramMap: ParamMap) => paramMap.get('id')),
        // We cast the string id into a Number
        map((id: string) => Number(id)),
        // We filter to keep only id which are real number > 0
        filter((id: number) => !isNaN(id) && id > 0),
        // Just a console.log
        tap((id: number) => console.log(`id is ${id}`))
      )

    // Let's retrieve our product Observable based on previous id Observable
    // It means that's a new event on id$ will trigger an event here an update
    //  as well our product
    this.product$ = id$.pipe(
      // We switch the OBservable to the product one to retrieve
      // cf: https://www.learnrxjs.io/operators/transformation/switchmap.html
      switchMap((id: number) => productService.getProductById(id))
    )
  }

}
