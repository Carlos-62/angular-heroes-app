import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    Error404PageComponent,
  ],
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
