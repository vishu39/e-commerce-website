import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemsArray: any = [];
  Product: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() {}

  getProduct() {
    this.Product.next(JSON.parse(localStorage.getItem('cartItem')));
  }
  getItem() {
    this.itemsArray = JSON.parse(localStorage.getItem('cartItem'));
  }

  setProduct(product: any) {
    localStorage.setItem('cartItem', JSON.stringify(product));
  }

  addingItemToCart(item: any) {
    this.itemsArray.push(item);
    this.setProduct(this.itemsArray);
    this.getProduct();
    this.getAllItemTotal();
  }

  getAllItemTotal() {
    let total = 0;
    let array = JSON.parse(localStorage.getItem('cartItem'));
    array.map((m) => {
      total += m.total;
    });
    return total;
  }

  deleteItemFromCart(item: any) {
    this.itemsArray.filter((a: any, index: any) => {
      if (item.id === a.id) {
        this.itemsArray.splice(index, 1);
      }
    });
    this.setProduct(this.itemsArray);
    this.getProduct();
  }

  clearAllItemFromCart() {
    this.itemsArray = [];
    this.setProduct(this.itemsArray);
    this.getProduct();
  }
}
