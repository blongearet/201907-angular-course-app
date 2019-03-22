import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../shared/model/product/product.service';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  constructor(productService: ProductService, route: ActivatedRoute) {
    // First of all, we construct the Observable to get id from url
    // We'll use the paramMap which is a ParamMap
    // cf: https://angular.io/api/router/ParamMap
    const id$: Observable<number> = route.paramMap
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
  }

}
