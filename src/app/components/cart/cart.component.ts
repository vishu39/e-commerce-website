import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = [
    'S.No',
    'Name',
    'Image',
    'Price',
    'Quantity',
    'Total',
  ];
  noOfProduct: number = 0;
  grandTotal!: number;
  products: any[];
  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cartService.getProduct();
    this.cartService.getPriceTotal();
    this.cartService.getItem();
    this.getCartProduct();
  }
  getCartProduct() {
    this.cartService.Product.subscribe((res) => {
      this.products = res;
    });
    this.grandTotal = this.cartService.getPriceTotal();
  }

  removeItem(product: any) {
    this.cartService.deleteItem(product);
    this.getCartProduct();
  }

  clearAll() {
    this.cartService.clearAll();
    this.getCartProduct();
  }
  shopMore() {
    this.route.navigateByUrl('/main');
  }
}
