import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  noOfProduct: any = 0;
  constructor(
    private loginService: LoginService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProduct();
    this.cartService.Product.subscribe((res) => {
      this.noOfProduct = res.length;
    });
  }

  logout() {
    this.loginService.logout();
  }
}
