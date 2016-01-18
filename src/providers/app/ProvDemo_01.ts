import {Component, View} from 'angular2/core';
import { MyClass } from './models/MyClass';

@Component({
  selector: 'ProvDemo',
  template: `
    <header>
      <h2>Demo</h2>
    </header>
    <div>Here is the main Provider comp</div>
  `,
  providers: [MyClass]
})
export class ProvDemo {
  constructor(myClass: MyClass ) {
    console.log("ProvDemo myClass", myClass.time, myClass.num);
}

