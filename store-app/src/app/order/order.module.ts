import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CartPipe } from '../shared/pipes/cart.pipe';

@NgModule({
  declarations: [OrderComponent, CartPipe],
  imports: [CommonModule, OrderRoutingModule, SharedModule, MaterialModule],
})
export class OrderModule {}
