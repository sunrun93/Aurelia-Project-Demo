import { autoinject,observable  } from 'aurelia-framework';
import { bindable } from 'aurelia-templating';

@autoinject
export class TreeNode {
    @bindable treeNode;
    @observable color = 'blue';

    private showMenu = false;
    private menu:Element;
    
    attached(){
        this.addEventListener();
    }

    colorChanged(oldValue,newValue){
        console.log(newValue);
    }

    private addEventListener() {
        document.body.addEventListener("mousedown", (e: MouseEvent) => {
            this.showMenu = false;
        });
    }

    private showContextMenu(e:Event){
        e.stopPropagation();
        e.preventDefault();
        console.log("ssssss");
        this.showMenu = true;
        setTimeout(()=>{
            this.menu["style"].left = e["clientX"]+"px";
            this.menu["style"].top = e["clientY"]+"px";
        },0);
    }

    private showChildNode:boolean=false;

    private toggleChildNode(){
        this.showChildNode = !this.showChildNode;
    }

    private itemClick(){
        console.log("AAAAAAAA");
        this.showMenu = false;
    }
    
    private showName(node){
        console.log(node.id);

    }

    private colorChange(newVlaue, oldValue){

    }
  
}