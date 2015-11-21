//main entry point
import {bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {App} from './app';

bootstrap(App, [HTTP_BINDINGS])
  .catch(err => console.error(err));