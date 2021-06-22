import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found.routing';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, SharedModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
