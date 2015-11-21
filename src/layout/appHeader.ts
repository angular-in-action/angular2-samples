//our root app component
import {Component, View} from 'angular2/angular2'

@Component({
  selector: 'app-header'
})
@View({
  template: `
    <header>
      <h2>Second Angular 2 App</h2>
    </header>
  `
})
export class AppHeader {}