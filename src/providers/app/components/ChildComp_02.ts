import {Component, View, Input} from 'angular2/core';
import { MyClass } from '../models/MyClass';

@Component({
  selector: 'ChildComp',
  template: `
    <div>
      This is ChildComp.
    </div>
  `,
  providers: [MyClass]
})

export class ChildComp {
  constructor(myClass: MyClass) {
    console.log("ChildComp myClass", myClass.time, myClass.num);
  }
}
