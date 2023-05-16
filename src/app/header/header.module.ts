import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoHeaderComponent } from './components/logo-header/logo-header.component';
import { HeaderComponent } from './header.component';
import { ShareModule } from '../share/share.module';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';



@NgModule({
  declarations: [
    LogoHeaderComponent,
    HeaderComponent,
    NavigationHeaderComponent
  ],
  imports: [
    CommonModule,
    ShareModule 
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
