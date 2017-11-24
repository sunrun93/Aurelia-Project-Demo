export class About {
    private nodeItems = [];
    private rootNodes = [];
    private color = "red";

    constructor(){

    }

    attached(){
        this.nodeItems = [
            { id: '1', name: 'test1', isGroup:true},
            { id: '2', name: 'test2', isGroup:false},
            { id: '3', name: 'test3', isGroup:true },
            { id: '4', name: 'test4', isGroup:false },
            { id: '5', name: 'test1-1', parentId: '1',equation:"AAAAAAAAA"},
            { id: '6', name: 'test1-2', parentId: '1',equation:"BBBBBBBBB"},
            { id: '7', name: 'test3-1', parentId: '3',equation:"CCCCCCCCC"}
          ];
        this.renderBasicNode(); 
    }

    private callBackFun(){
      console.log("AAA");

    }
    
    private renderBasicNode(){
        this.nodeItems.forEach((node)=>{
          if(!node.parentId){
            this.rootNodes.push(node);
          }
        });
        this.rootNodes.forEach((node)=>{
            this.getChildren(node);
        })
      }

      private getChildren(node){
        let children = this.nodeItems.filter((n)=>{return n.parentId === node.id});
        node.children = children;
      }

      private changeColor() {
        if (this.color == "red") {
          this.color = "yellow";
        } else {
          this.color = "red";
        }
      }
}