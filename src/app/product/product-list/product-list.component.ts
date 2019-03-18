import { Component } from '@angular/core';

export interface Product {
  id: string
  productName: string
  productCode: string
  releaseDate: string
  description: string
  price: number
  starRating: number
  imageUrl:string | string[]
  isBigZoom: boolean
  currentImageIndex: number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public searchTerm: string = ''
  public showImage: boolean = true
  public displayImage: boolean = true
  public products: Product[] = [
    {
        "id": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": [
          "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CQaaFTy2iy2ZB7mcZnyoPg5SdvvILpLYHcf6FtOVMstB48N53Q",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ngzQd2gARVNaty2MXJX1PNyMKUEktIfNbOJwzDNsiCLsPFpY"
        ],
        "isBigZoom": false,
        "currentImageIndex": 0
    },
    {
        "id": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
        "isBigZoom": false,
        "currentImageIndex": 0
    },
    {
        "id": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
        "isBigZoom": false,
        "currentImageIndex": 0
    },
    {
        "id": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
        "isBigZoom": false,
        "currentImageIndex": 0
    },
    {
        "id": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
        "isBigZoom": false,
        "currentImageIndex": 0
    }
  ]

  public getFilteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase()
    return this.products.filter(product => {
      const name = product.productName.toLowerCase()
      return name.indexOf(term) > -1
    })
  }

  public toggleImage(): boolean {
    this.showImage = !this.showImage
  }

  public isCaroussel(product: Product): boolean {
    return Array.isArray(product.imageUrl)
  }

  public moveCaroussel(product: Product, step: number): void {
    product.currentImageIndex = (product.currentImageIndex + step) % product.imageUrl.length
  }

}
