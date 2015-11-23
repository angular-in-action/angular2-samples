//our root app component
import {Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2'
import {HTTP_BINDINGS} from 'angular2/http';
import {StockSearch} from './components/stockSearch';

@Component({
  selector: 'app'
})
@View({
  template: `
    <header>
      <h2>Second Angular 2 App</h2>
    </header>
    <stock-search>
      
    </stock-search>
  `,
  directives: [CORE_DIRECTIVES, StockSearch]
})
export class App {}

bootstrap(App, [HTTP_BINDINGS])
  .catch(err => console.error(err));