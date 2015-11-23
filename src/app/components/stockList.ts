// List people
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'

@Component({
  selector: 'stock-list',
  inputs: ['stocks']
})
@View({
  template: `
    <ul>
      <li *ng-for="#stock of stocks">
        <strong>{{stock.symbol}} ({{stock.ask | currency:'USD':true}}):</strong> {{stock.name}}
      </li>
    </ul>
  `,
  directives: [CORE_DIRECTIVES]
})
export class StockList {
  public stocks: Array<string>;
}