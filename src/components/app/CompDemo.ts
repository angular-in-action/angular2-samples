import {Component, View} from 'angular2/core';
import { ParentComp } from './components/ParentComp'; 

@Component({
  selector: 'CompDemo',
  template: `
    <header>
      <h2>Demo</h2>
    </header>
    <div>Here is the main comp that includes ParentComp</div>
    <ParentComp [myname]="myFriend" (myevent)="handleMyEvent($event)"></ParentComp>
  `,
  directives: [ParentComp]
})
export class CompDemo {
  myFriend: String;
  
  constructor() {
    this.myFriend = 'Josephine Wind';
   }
  handleMyEvent(arg) {
    console.log("in CompDemo handling myEvent", arg)
  }
}

