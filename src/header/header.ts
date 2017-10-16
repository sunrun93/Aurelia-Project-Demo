import {autoinject} from 'aurelia-framework';
import { bindable, customElement } from 'aurelia-templating';
import {AppRouter, RouterConfiguration} from 'aurelia-router';

//@customElement("header-part")
@autoinject
export class Header{
    private router:AppRouter;

    constructor(){

        let b = 1;
    }

    

    attached(){
        let a = 2;
    }
}