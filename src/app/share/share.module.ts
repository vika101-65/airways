import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

const matAngularModules = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matAngularModules
  ],
  exports: [
    ...matAngularModules
  ],
})
export class ShareModule { }
