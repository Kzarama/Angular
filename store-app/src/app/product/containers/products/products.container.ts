import { Component, OnInit } from '@angular/core';

import { Product } from '@core/models/product.model';

import { ProductsService } from '@core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  clickProduct(id: number): void {}
}
