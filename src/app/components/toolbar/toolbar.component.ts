import { Component, OnInit } from '@angular/core';
import { AllproductService } from 'src/app/services/allproduct.service';
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
    private cartService: CartService,
    private allProduct: AllproductService
  ) {}

  ngOnInit(): void {
    this.noOfProduct = localStorage.getItem('cartLength');
  }

  logout() {
    this.loginService.logout();
  }
}
