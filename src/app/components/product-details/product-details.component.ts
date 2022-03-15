import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllproductService } from 'src/app/services/allproduct.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  url: any;
  productDetails: any;
  spinner: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private allProduct: AllproductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.url = `${this.allProduct.url}/${this.productId}`;
    this.allProduct.getSingleProduct(this.url);
    this.fetchProductDetails();
    this.cartService.getItem();
    this.cartService.getAllItemTotal();
  }
  getParams() {
    this.route.queryParamMap.subscribe((qparam) => {
      this.productId = qparam.get('id');
    });
  }

  fetchProductDetails() {
    this.allProduct.singleProduct.subscribe((res) => {
      this.productDetails = res;
      this.productDetails.total = res.price;
      this.productDetails.quantity = 1;
      this.spinner = this.allProduct.spinner;
    });
  }

  addToCart(product: any) {
    this.cartService.addingItemToCart(product);
  }
}
