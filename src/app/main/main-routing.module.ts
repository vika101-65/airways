import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFligtsComponent } from './components/book-fligts/book-fligts.component';

const routes: Routes = [
  { path: 'search', component: BookFligtsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
