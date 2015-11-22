//our root app component
import {Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2'
import {HTTP_BINDINGS} from 'angular2/http';
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

bootstrap(App, [HTTP_BINDINGS])
  .catch(err => console.error(err));