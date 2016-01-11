//our root app component
import {bootstrap} from 'angular2/platform/browser';
import {CompDemo} from './CompDemo';

bootstrap(CompDemo)
  .catch(err => console.error(err));

