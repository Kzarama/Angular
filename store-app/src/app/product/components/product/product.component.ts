import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/core/service/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product: Product; // change strict property of tsconfig.json to false

  @Output()
  productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}