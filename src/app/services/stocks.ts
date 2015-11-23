//a simple service
import {Injectable} from 'angular2/angular2';
import {Http, URLSearchParams} from 'angular2/http';

@Injectable()
export class StocksService {
  
  // TS shortcut "public" to put http on this
  constructor(public http:Http) {}
  
  snapshot(symbols:string) {
    let params = new URLSearchParams()
    params.set('symbols', symbols);
    
    return this.http.get("/api/snapshot", {search: params})
    .toPromise(Promise)
    .then(res => res.json().filter(x => x.name));
  }
}