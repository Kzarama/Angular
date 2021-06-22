import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../core/service/models/product.model';
import { ProductsService } from '../../../core/service/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });
  }

  // createProduct() {
  //   const newProduct: Product = {};
  //   this.productsService.createProduct(newProduct);
  // }

  // updateProduct() {
  //   const newProduct: Product = {};
  //   const id: string = '';
  //   this.productsService.updateProduct(id, newProduct);
  // }

  // deleteProduct() {
  //   this.productsService.deleteProduct(id);
  // }
}
