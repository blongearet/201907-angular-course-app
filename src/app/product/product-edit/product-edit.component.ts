import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/model/product/product.service';
import { first } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

const HTTP_URL_PATTERN: string =
  '^((http[s]?):\\/)\\/?([^:\\/\\s]+)((\\/\\w+)*)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?$'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {

  public productForm: FormGroup

  constructor(private fb: FormBuilder, private productService: ProductService, route: ActivatedRoute) {
    this.productForm = this.fb.group({
      id: [null],
      productName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(50)]),
      productCode: [''],
      releaseDate: [new Date()],
      description: [''],
      price: [0, Validators.min(0)],
      starRating: [0, [Validators.min(0), Validators.max(5), ]],
      imageUrl: ['', Validators.pattern(HTTP_URL_PATTERN)]
    })

    const id = Number(route.snapshot.paramMap.get('id'))

    this.productService.getProductById(id).pipe(first())
      .subscribe(product => this.productForm.patchValue(product))
    
  }

  public save() {
    if (this.productForm.valid) {
      this.productService.save(this.productForm.getRawValue())
    }
  }
}
