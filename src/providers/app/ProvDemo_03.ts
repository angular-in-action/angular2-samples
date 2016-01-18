import {Component, View, Inject} from 'angular2/core';
import { MyClass } from './models/MyClass';
import { ChildComp } from './components/ChildComp_02';

@Component({
  selector: 'ProvDemo',
  template: `
    <header>
      <h2>Demo</h2>
    </header>
    <div>Here is the main Provider comp
      <ChildComp></ChildComp>
    </div>
  `,
  directives: [ChildComp],
  providers: [MyClass]
})
export class ProvDemo {
  constructor(myClass: MyClass ) {
    console.log("ProvDemo myClass", myClass.time, myClass.num);
}

