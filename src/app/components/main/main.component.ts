import { Component, OnInit } from '@angular/core';
import { AllproductService } from 'src/app/services/allproduct.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  categories: any[];
  products: any[];
  allProducts: any[];
  item: number = 0;
  spinner: boolean = false;

  constructor(
    private cateoryService: CategoryService,
    private productService: AllproductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cateoryService.getCategories();
    this.getCategories();
    this.productService.getProducts();
    this.getProducts();
  }

  //For category component

  getCategories(): void {
    this.cateoryService.category.subscribe((res) => {
      this.categories = res;
    });
  }
  catButton(event) {
    let item;

    item = this.products.filter((item) => {
      if (item.category === event) {
        return item;
      }
    });
    this.allProducts = item;
  }

  //For Product Component

  setItemIntoProduct() {
    this.products.forEach((product) => {
      Object.assign(product, {
        quantity: 1,
        total: product.price,
      });
    });
  }

  getProducts(): void {
    this.productService.product.subscribe((res) => {
      this.products = res;
      this.spinner = this.productService.spinner;
      this.setItemIntoProduct();
      this.allProducts = this.products;
    });
  }

  home() {
    this.allProducts = this.products;
  }
  addToCart(event) {
    this.cartService.addToCart(event);
  }
}
