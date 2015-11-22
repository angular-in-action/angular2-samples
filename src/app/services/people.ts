//a simple service
import {Injectable, EventEmitter} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
  people: EventEmitter;
  results: Rx.Subject;
  constructor(http:Http) {
    this.results = "";
    this.people = http.get('api/people.json').map(res => res.json());
  }
}