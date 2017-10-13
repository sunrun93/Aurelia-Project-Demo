import {inject} from 'aurelia-framework';
import { bindable, customElement } from 'aurelia-templating';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
@customElement('content-part')

export class Content {
    private label;
    private myData;
    private subscriber;
    private email:string;
    private password:string;
    private isChecked:boolean;
    private options = [];
    private selectedOption = {};
    private router;

    constructor(private eventAggregator){
        this.eventAggregator = eventAggregator;
    }

    attached(){
        this.label ="Aurelia Demo";
        this.myData = 'Enter some text!';
        this.email = "";
        this.password = "";
        this.isChecked = false;

        this.options = [
            {id:1,text:"first"},
            {id:2,text:"Second"},
            {id:3,text:"Third"}
        ];
        this.selectedOption = this.options[0];
    }

    private updateContent(){
        this.label ="Aurelia Demo updated";
    }

    private cancelUpdate(){
        this.label ="Aurelia Demo";
    }

    //eventAggregator
    private publish(){
        let payload = "This is some data...";
        this.eventAggregator.publish("myEventName",payload);
    }

    private subscribe(){
        this.subscriber = this.eventAggregator.subscribe("myEventName",(payload) => {
            console.log(payload);
        })
    }

    private dispose() {
        this.subscriber.dispose();
        console.log("Disposed!!!");
     }
     
    //Form
    private signIn(){
        var userData = {
            email:this.email,
            password:this.password,
            isChecked:this.isChecked,
            checked:this.selectedOption["id"]
        };
        console.log(userData);
    }
}