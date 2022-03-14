import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllproductService {
  spinner: boolean = false;
  product: BehaviorSubject<any> = new BehaviorSubject([]);
  singleProduct: BehaviorSubject<any> = new BehaviorSubject({});

  url = 'https://fakestoreapi.com/products';

  constructor(private Http: HttpClient) {}

  getProducts() {
    this.Http.get(this.url).subscribe((product) => {
      this.spinner = true;
      this.product.next(product);
    });
  }

  getSingleProduct(url) {
    this.Http.get(url).subscribe((product) => {
      this.spinner = true;
      this.singleProduct.next(product);
    });
  }
}
