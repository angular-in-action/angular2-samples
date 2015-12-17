import {Component, View} from 'angular2/angular2'
import {StockList} from './stockList'
import {StocksService} from '../services/stocks'

@Component({
  selector: 'stock-search',
  providers: [StocksService]
})
@View({
  template: `
    <section>
      <h3>Stock Price & Name Lookup:</h3>
      <form (submit)="doSearch()">
        <input [(ng-model)]="searchText">
      </form>
      <stock-list [stocks]="stocks"></stock-list>
    </section>
  `,
  directives: [StockList]
})
export class StockSearch {
  searchText: string;
  stocks: Object[];
  
  constructor(public stockService:StocksService) {}
  
  doSearch() {
    this.stockService.snapshot(this.searchText)
    .then(data => this.stocks = data)
    .catch(err => console.log('error!', err));
  }
}