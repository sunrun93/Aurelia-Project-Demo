import {AppRouter, RouterConfiguration} from 'aurelia-router';
import {autoinject} from 'aurelia-framework';
@autoinject
export class App {
  private router: AppRouter;
  message = 'Hello World!';

  configureRouter( config: RouterConfiguration,  router: AppRouter ){
    config.title = 'Aurelia  aaa';

    config.map([
        {
            route:'',name:'About',moduleId:'./components/about/about',nav:true,title:'About'
        },
        {
            route:'info',name:'info',moduleId:'./components/info/info',nav:true,title:'Info'
        }
    ]);
    this.router = router;
  }
}
