import {AppRouter, RouterConfiguration} from 'aurelia-router';
import {autoinject} from 'aurelia-framework';
@autoinject
export class Info {
  private router: AppRouter;
  message = 'Hello World!';

  
}
