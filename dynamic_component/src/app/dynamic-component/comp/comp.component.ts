import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
 @ViewChild('container', {read: ViewContainerRef, static:true})
  container!: ViewContainerRef;
  comp1 = Comp1Component;
  comp2 = Comp2Component;
  constructor() { }

  ngOnInit(): void {
  }

  createComponent(value:any){
    this.container.clear();
    this.container.createComponent(value);
  }
}
