import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: any = [];
  Product: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() {}

  getProduct() {
    this.Product.next(JSON.parse(localStorage.getItem('cartItem')));
  }
  getItem() {
    this.cartList = JSON.parse(localStorage.getItem('cartItem'));
  }

  setProduct(product: any) {
    localStorage.setItem('cartItem', JSON.stringify(product));
  }

  addToCart(product: any) {
    this.cartList.push(product);
    this.setProduct(this.cartList);
    this.getProduct();
    this.getPriceTotal();
  }

  getPriceTotal() {
    let total = 0;
    let array = JSON.parse(localStorage.getItem('cartItem'));
    array.map((m) => {
      total += m.total;
    });
    return total;
  }

  deleteItem(product: any) {
    this.cartList.filter((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartList.splice(index, 1);
      }
    });
    this.setProduct(this.cartList);
    this.getProduct();
  }

  clearAll() {
    this.cartList = [];
    this.setProduct(this.cartList);
    this.getProduct();
  }
}
