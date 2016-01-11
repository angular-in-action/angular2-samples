// List people
import {Component, View} from 'angular2/core'

@Component({
  selector: 'StockList',
  inputs: ['stocks']
})
@View({
  template: `
    <ul>
      <li *ngFor="#stock of stocks">
        <strong>{{stock.symbol}} ({{stock.ask | currency:'USD':true}}):</strong> {{stock.name}}
      </li>
    </ul>
  `
})
export class StockList {
  public stocks: Array<string>;
}