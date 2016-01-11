//our root app component
import {Component, View} from 'angular2/core'
import {StockSearch} from './components/stockSearch';

@Component({
  selector: 'App'
})
@View({
  template: `
    <header>
      <h2>Second Angular 2 App</h2>
    </header>
    <StockSearch></StockSearch>
  `,
  directives: [StockSearch]
})
export class AppComponent {}
