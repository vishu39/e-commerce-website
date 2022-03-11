import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() categories;
  @Output() catButton = new EventEmitter();
  @Output() homeButton = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  category(cat) {
    this.catButton.emit(cat);
  }
  home() {
    this.homeButton.emit();
  }
}
