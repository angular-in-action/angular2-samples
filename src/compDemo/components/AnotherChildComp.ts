/// <reference path="../../../node_modules/angular2/angular2.d.ts" />
import {Component, View, Input, CORE_DIRECTIVES} from 'angular2/angular2'
import { MyClass } from '../services/MyClass';

@Component({
    selector: 'another-child-comp',
    template: `
    <div>
      &nbsp;&nbsp;Here is another-child-comp
    </div>
  `,
    directives: [CORE_DIRECTIVES]
})
export class AnotherChildComp {
  @Input() myname: string;

  constructor( myClass: MyClass) {
    console.log("In another child comp", myClass.time, myClass.num)
  }
}