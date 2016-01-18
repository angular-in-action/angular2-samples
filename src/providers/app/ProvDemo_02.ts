import {Component, View, Inject} from 'angular2/core';
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
  constructor(myClass: MyClass, @Inject('SECURITY_KEY') SECKEY ) {
    console.log("ProvDemo myClass", SECKEY, myClass.time, myClass.num);
  }
}

