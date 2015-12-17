//our root app component
import {bootstrap, provide, Injector, OpaqueToken, ELEMENT_PROBE_BINDINGS} from 'angular2/angular2'
import {HTTP_BINDINGS} from 'angular2/http'
import {CompDemo} from './CompDemo'

bootstrap(CompDemo, [HTTP_BINDINGS] )
  .catch(err => console.error(err));

