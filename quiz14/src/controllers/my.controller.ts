// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';
export class MyController {
  @get('/say')
  hello(): string {
    return 'Hello !, My name is Nikhil Mandge';
  }
}
