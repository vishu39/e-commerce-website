import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category: BehaviorSubject<any> = new BehaviorSubject([]);

  url = 'https://fakestoreapi.com/products/categories';

  constructor(private Http: HttpClient) {}

  getCategories() {
    this.Http.get(this.url).subscribe((categories) => {
      this.category.next(categories);
    });
  }
}
