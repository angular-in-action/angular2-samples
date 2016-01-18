//our root app component
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ProvDemo} from './ProvDemo_01';

bootstrap(ProvDemo, [provide('SECURITY_KEY', {useValue: '123abc'})])
  .catch(err => console.error(err));

