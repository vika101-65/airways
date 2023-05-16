import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BookFligtsComponent } from './components/book-fligts/book-fligts.component';
import { MainComponent } from './main.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    BookFligtsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
