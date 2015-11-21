// List people
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'
import {PeopleService} from '../../services/people'
import {Person} from './person'

@Component({
  selector: 'people-list',
  providers: [PeopleService]
})
@View({
  template: `
    <person *ng-for="#person of people"
      [name]="person.name"
      (hello)="saidHello($event)">
    </person>
  `,
  directives: [CORE_DIRECTIVES, Person]
})
export class PeopleList {
  
  constructor(public peopleService:PeopleService) {
    peopleService.people
      .subscribe(people => this.people = people);
  }
  saidHello($event){
    alert(`You said hello to ${$event}`)
  }
}