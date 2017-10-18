import {autoinject} from 'aurelia-framework';
import { bindable, customElement } from 'aurelia-templating';
import {AppRouter, RouterConfiguration} from 'aurelia-router';

@customElement("header-part")
@autoinject
export class Header{
    constructor(){
    }

    attached(){
    }
}