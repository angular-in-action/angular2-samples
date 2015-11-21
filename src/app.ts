//our root app component
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'
import {AppHeader} from './layout/appHeader';
import {AppContent} from './layout/appContent';

@Component({
  selector: 'app'
})
@View({
  template: `
    <app-header></app-header>
    <app-content>
      
    </app-content>
  `,
  directives: [CORE_DIRECTIVES, AppHeader, AppContent]
})
export class App {}