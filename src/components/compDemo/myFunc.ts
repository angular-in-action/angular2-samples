import { Injectable, Inject } from 'angular2/angular2';
import { MyClass } from './MyClass';

@Injectable()
export function myFunc(  ) {
  return {
    arg1: myClass,
    name: "returned from myFunc"
  }
}

