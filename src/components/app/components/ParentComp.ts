import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'ParentComp',
    inputs: ['myname'],
    outputs: ['myevent']
})
@View({
  template: `
    <div (click)="fireMyEvent()">
      Here is ParentComp and here's 'myname': {{myname}}
    </div>
  `
})

export class ParentComp {
  public myname: String; 
  public myevent: EventEmitter = new EventEmitter();
  // public @Input() myname: String;
  // public @Output() myevent: EventEmitter = new EventEmitter();

  constructor() {
    console.log("ParentComp, myname not yet defined: ", this.myname);
  }
  fireMyEvent(evt) {
    this.myevent.next(['abc','def']);
  }
}
