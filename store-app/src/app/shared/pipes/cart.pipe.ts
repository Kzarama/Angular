import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/service/cart.service';

@Pipe({
  name: 'cartRepeat',
})
export class CartPipe implements PipeTransform {
  products: Product[];

  constructor(private cartService: CartService) {}

  transform(product: any, args?: any): any {
    var total = 0;
    this.cartService.cart$.subscribe((products) => {
      products.forEach((element) => {
        if (element.id === product.id) {
          total += 1;
        }
      });
    });
    return total;
  }
}
