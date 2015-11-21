//our root app component
import {Component, View} from 'angular2/angular2'
import {PeopleList} from '../components/people/peopleList'

@Component({
  selector: 'app-content'
})
@View({
  template: `
    <section>
      <h3>Search for Something:</h3>
      <searcher></searcher>
      <people-list></people-list>
    </section>
  `,
  directives: [PeopleList]
})
export class AppContent {}