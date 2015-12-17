import {Component, View, Input, Output, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'parent-comp',
    inputs: ['myname'],
    outputs: ['myevent']
})
@View({
    template: `
      <div (click)="fireMyEvent()">
        Here is ParentComp and here's 'myname': {{myname}}
      </div>
    `,
    directives: [CORE_DIRECTIVES]
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
