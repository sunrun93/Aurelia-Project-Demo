export class About {
    private infoData = [];
    private basicLevelNodes = [];
    constructor(){

    }

    attached(){
        this.infoData = [
            { id: '1', label: 'test1' },
            { id: '2', label: 'test2' },
            { id: '3', label: 'test3' },
            { id: '4', label: 'test4' },
            { id: '5', label: 'test1-1', parentId: '1' },
            { id: '6', label: 'test1-2', parentId: '1' },
            { id: '7', label: 'test3-1', parentId: '3' }
          ];
        this.renderBasicNode(); 
    }

    
    private renderBasicNode(){
        this.infoData.forEach((node)=>{
          if(!node.parentId){
            this.basicLevelNodes.push(node);
          }
        })
      }
}