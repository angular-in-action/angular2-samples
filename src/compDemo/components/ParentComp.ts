/// <reference path="../../../node_modules/angular2/angular2.d.ts" />
import {Component, View, Input, Output, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import { ChildComp } from './ChildComp';

@Component({
    selector: 'parent-comp'
})
@View({
    template: `
      <div (click)="fireMyEvent()">
        Here is ParentComp and here's 'myname': {{myname}} {{othername}}
      </div>
    `,
    directives: [CORE_DIRECTIVES, ChildComp]
})

export class ParentComp {
  public @Input() myname: String;
  public @Output() myevent: EventEmitter = new EventEmitter();

  constructor() {
    console.log("ParentComp, myname not yet defined: ", this.myname);
  }
  fireMyEvent(evt) {
    this.myevent.next(['abc','def']);
  }
}


/*
// import {Component, View, Output, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';
//import { ChildComp } from './ChildComp';
//import { MyClass } from '../services/MyClass';

@Component({
    selector: 'parent-comp'
    , providers: [MyClass]
    , viewProviders: [MyClass]
})
@View({
    template: `
      <div>
        Here is ParentComp that includes ChildComp and here's 'myname': {{myname}}
        <child-comp></child-comp>
        <ng-content></ng-content>
        End of ParentComp
      </div>
    `,
    directives: [CORE_DIRECTIVES, ChildComp]
})

// export class ParentComp {
    constructor(myClass: MyClass) {
        console.log("ParentComp myClass", myClass.time, myClass.num);
    }
}
*/


/* 
@Component({
    selector: 'parent-comp',
    inputs: ['myname'],
    outputs: ['myevent']
})
@View({
    template: `
      <div>
        Here is ParentComp that includes ChildComp and here's 'myname': {{myname}}
        <child-comp (click)="fireMyEvent()" [myname]='myname'></child-comp>
      </div>
      <ng-content></ng-content>
    `,
    directives: [CORE_DIRECTIVES, ChildComp]
})

// export class ParentComp {
  public myname: String;
  public myevent: EventEmitter = new EventEmitter();

  constructor( myClass: MyClass ) {
    console.log("ParentComp myClass", myClass.time, myClass.num);

  }
  fireMyEvent(evt) {
    console.log("ParentComp about to fire 'myevent' ", evt);
    this.myevent.next(['abc','def']);
  }
}
*/