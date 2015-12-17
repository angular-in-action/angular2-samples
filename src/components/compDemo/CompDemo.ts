import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import { ParentComp } from './components/ParentComp'; 

@Component({
  selector: 'comp-demo'
  template: `
    <header>
      <h2>Demo</h2>
    </header>
    <div>Here is the main comp that includes ParentComp</div>
    <parent-comp [myname]="myFriend" (myevent)="handleMyEvent($event)"></parent-comp>
  `,
  directives: [CORE_DIRECTIVES, ParentComp]
})
export class CompDemo {

  constructor() {
    this.myFriend = 'Josephine Wind';
   }
  handleMyEvent(arg) {
    console.log("in CompDemo handling myEvent", arg)
  }
}

