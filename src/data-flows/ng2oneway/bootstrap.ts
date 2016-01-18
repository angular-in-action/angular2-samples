// bootstrap (bootstrap.ts)
import {bootstrap} from 'angular2/platform/browser'
import {TodoApp} from './app'

bootstrap(TodoApp)
  .catch(err => console.error(err));