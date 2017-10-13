import {inject} from 'aurelia-framework';
import { bindable, customElement } from 'aurelia-templating';
import {Router, RouterConfiguration} from 'aurelia-router';

@customElement("header-part")

export class Header{
    private router:Router;

    configureRouter(config:RouterConfiguration, router:Router){
        config.title = 'Aurelia';

        config.map([
            {
                route:['','home'],name:'home',moduleId:'../components/about/about',nav:true,title:'About'
            },
            {
                route:'about',name:'about',moduleId:'../components/info/info',nav:true,title:'Info'
            }
        ]);
        this.router = router;
    }
}