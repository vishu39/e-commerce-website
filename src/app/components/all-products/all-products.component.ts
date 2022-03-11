import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  @Input() products;
  @Input() item;
  @Output() addtoCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addToCart(product: any) {
    this.addtoCart.emit(product);
  }
}
