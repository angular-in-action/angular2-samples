/// <reference path="../../node_modules/angular2/angular2.d.ts" />
import {Component, View, CORE_DIRECTIVES, Injector, Inject, provide, resolve} from 'angular2/angular2';
import { ParentComp } from './components/ParentComp'; 
import { MyClass } from './MyClass';
import { MyClass2 } from './MyClass2';

// t = [1,2]
// var injector = Injector.resolveAndCreate([
//       provide(t, {useClass: MyClass2})
//     ])

// console.log("t provider: ", injector.get(t));

@Component({
  selector: 'comp-demo',
  providers: [MyClass],
  viewProviders: [MyClass2],
  template: `
    <header>
      <h2>Demo</h2>
    </header>
    <div>Here is the main comp that includes ParentComp</div>
    <parent-comp [myname]='myname' (myevent)="handleMyEvent($event)"></parent-comp>
  `,
  directives: [CORE_DIRECTIVES, ParentComp]
})
export class CompDemo {
  public myname;

  // constructor( myClass: MyClass, public injector: Injector ) {
  // constructor(myClass: MyClass, @Inject('SECURITY_KEY') SECKEY ) {
  // constructor( @Inject(MyClass) myClass , @Inject('SECURITY_KEY') SECKEY ) {
  constructor( myClass:MyClass, myClass2: MyClass2) {
    this.myname = 'Josephine Wind';
    console.log("Comp myClass ", myClass.time);
    // this.injector = injector
    // debugger
    // console.log('provider ', Injector.resolve( [ provide('foober', { useClass: MyClass2 }) ][0] )
    // var r = Injector.resolveAndCreate([provide('foober', { useClass: MyClass2 })] )

    // debugger
    // injector._new( (Injector.resolve( [provide('foober', { useClass: MyClass2 })])[0] )

    // *** LEAVE-OFF: This works to create an injector and add a provider to it
    // this.child = injector.resolveAndCreateChild( [ provide('foober', { useClass: MyClass2 }) ] ) )
    // console.log("CompDemo foober", this.child.get('foober'), this.child.parent === injector )

  }
  handleMyEvent(arg) {
    console.log("in CompDemo handling myEvent", arg, this.child.get('foober'))
  }
}


/* SCRAP 

  // works
  // import {Component, View, Inject, Injector, OpaqueToken, CORE_DIRECTIVES, provide} from 'angular2/angular2';


  // works
  // providers: [ provide(myFunc, { useFactory: myFunc, deps: [MyClass]}) ],

  // by itself does not work
  var injector = Injector.resolveAndCreate([
    provide(myFunc, { useFactory: myFunc, deps: [MyClass] })
  ])

  // can make an OpaqueToken out of many things
  // var p2 = new OpaqueToken([1,2]); 



*/
