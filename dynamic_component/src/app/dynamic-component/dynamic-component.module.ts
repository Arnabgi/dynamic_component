import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CompComponent } from './comp/comp.component';



@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component,
    CompComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CompComponent,
    Comp1Component,
    Comp2Component
  ]
})
export class DynamicComponentModule { }
