import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '@core/models/product.model';

import { CartService } from '@core/service/cart.service';

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

  constructor(private cartService: CartService) {}

  addCart() {
    this.cartService.addCart(this.product);
  }
}
