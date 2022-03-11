import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: any = [];
  // length: BehaviorSubject<any> = new BehaviorSubject('');
  constructor() {}

  get Product() {
    return localStorage.getItem('cartItem');
  }
  get Length() {
    return localStorage.getItem('cartLength');
  }

  setProduct(product: any) {
    this.cartList.push(product);
    localStorage.setItem('cartItem', JSON.stringify(product));
    // this.length.next(product);
  }
  addToCart(product: any) {
    this.cartList.push(product);
    localStorage.setItem('cartItem', JSON.stringify(this.cartList));
    localStorage.setItem('cartLength', this.cartList.length);
    // this.length.next(this.cartList);
    this.getPriceTotal();
  }
  getPriceTotal() {
    let total = 0;
    this.cartList.map((m) => {
      total += m.total;
    });
    return total;
  }
  deleteItem(product: any) {
    this.cartList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartList.splice(index, 1);
      }
    });
    localStorage.setItem('cartItem', JSON.stringify(this.cartList));
    localStorage.setItem('cartLength', this.cartList.length);
    // this.length.next(this.cartList);
  }
  clearAll() {
    this.cartList = [];
    localStorage.setItem('cartItem', JSON.stringify(this.cartList));
    localStorage.setItem('cartLength', this.cartList.length);
    // this.length.next(this.cartList);
  }
}
