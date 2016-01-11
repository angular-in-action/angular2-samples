//a simple service
import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';

@Injectable()
export class StocksService {
  
  // TS shortcut "public" to put http on this
  constructor(public http:Http) {}
  
  snapshot(symbols:string):any {
    let params = new URLSearchParams();
    params.set('symbols', symbols);

    return this.http.get("/api/snapshot", {search: params})
      .map(res => res.json()) // convert to JSON
      .map(x => x.filter(y => y.name)); // Remove invalid stocks (no name)
  }
}