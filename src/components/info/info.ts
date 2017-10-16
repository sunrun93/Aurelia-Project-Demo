import {AppRouter, RouterConfiguration} from 'aurelia-router';
import {autoinject} from 'aurelia-framework';
@autoinject
export class Info {
  private router: AppRouter;
  message = 'Hello World!';

  configureRouter( config: RouterConfiguration,  router: AppRouter ){
    config.title = 'Aurelia  aaa';

    config.map([
        {
            route:[''],name:'about',moduleId:'../about/about',nav:true,title:'about'
        },
        {
          route:['header'],name:'header',moduleId:'../../header/header',nav:true,title:'header'
      }
    ]);
    this.router = router;
  }
}
