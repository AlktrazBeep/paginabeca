import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingCardComponent } from './floating-card/floating-card.component';



@NgModule({
  declarations: [
    FloatingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FloatingCardComponent
  ]
})
export class SharedModule { }
