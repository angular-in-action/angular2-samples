/// <reference path="../../../node_modules/angular2/angular2.d.ts" />
import {Component, View, Input, Inject, Host, CORE_DIRECTIVES} from 'angular2/angular2'
import { MyClass } from '../services/MyClass';

@Component({
    selector: 'child-comp',
    template: `
    <div>
      &nbsp;&nbsp;Here is child-comp
    </div>
  `,
    directives: [CORE_DIRECTIVES]
})
export class ChildComp {
  constructor( @Inject(MyClass) myClass) {
    console.log("inside child comp ", myClass.time, myClass.num)
  }
}




/* 
@Component({
    selector: 'child-comp',
    template: `
    <div>
      Here is child-comp and 'myname': {{myname}}
    </div>
  `,
    directives: [CORE_DIRECTIVES]
})
// export class ChildComp {
  @Input() myname: string;

  constructor( @Inject(MyClass) myClass) {
    console.log("inside child comp ", myClass)

    console.log("ChildComp, myname not yet defined: ", this.myname)
    setTimeout(() => {
        console.log("ChildComp, after a timeout, myname is defined: ", this.myname);
    },10)
  }
}

*/