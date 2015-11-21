//a simple person component
import {Component, View, EventEmitter} from 'angular2/angular2'

@Component({
  selector: 'person',
  inputs: ['name'],
  outputs: ['hello'],
  styles: [`article {margin-top: 10px;}`],
  template: `
    <article>
      <span>{{name}}</span>
      <button (click)="sayHello()">Say Hello</button>
    </article>
  `
})
export class Person {
  hello = new EventEmitter();
  sayHello(e) {
    this.hello.next(this.name);
  }
}