import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './product-list/product-list.component';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Product[], term: string = ''): Product[] {
    if (Array.isArray(value)) {
      return value.filter(product => {
        const name = product.productName.toLowerCase()
        return name.indexOf(term.toLowerCase()) > -1
      })
    } else {
      console.error('Given value must be an array! 💥')
      return []
    }
  }

}
