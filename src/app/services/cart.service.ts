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
    let storedItem = localStorage.getItem('cartItem');
    this.Product.next(JSON.parse(storedItem));
  }

  setProduct(product: any) {
    this.cartList.push(product);
    localStorage.setItem('cartItem', JSON.stringify(product));
  }
  addToCart(product: any) {
    this.cartList.push(product);
    localStorage.setItem('cartItem', JSON.stringify(this.cartList));
    this.getProduct();
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
    this.getProduct();
  }
  clearAll() {
    this.cartList = [];
    localStorage.setItem('cartItem', JSON.stringify(this.cartList));
    this.getProduct();
  }
}
