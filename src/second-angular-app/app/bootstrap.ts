//our root app component
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {AppComponent} from './app';

bootstrap(AppComponent, [HTTP_PROVIDERS])
  .catch(err => console.error(err));