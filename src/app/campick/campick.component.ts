import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-campick',
  templateUrl: './campick.component.html',
  styleUrls: ['./campick.component.css']
})
export class CampickComponent implements OnInit {
  @Input() src: any[];
  @Input() dest: any[];
  tempsrc:any[];
  srcCopy:any[];
  destCopy:any[];
  selectedFiles1:any[];
  selectedFiles2:any[];


  constructor() { }

  ngOnInit() {
    this.srcCopy=[];
    this.destCopy=[];
    this.dest=[];
    this.tempsrc=[];
   //this.srcCopy =this.src;
  // this.destCopy= this.dest;
  }

getIndexCount(item: any, list: any){
   let index: number = -1;

   if(list) {
            for(let i = 0; i < list.length; i++) {

              if(list[i] == item) {
                    index = i;
                    break;

                }
            }

   }


   return index;
}

 findIndexInList(item: any, list: any): number {
        let index: number = -1;

        if(list) {
            for(let i = 0; i < list.length; i++) {

                /*if(list[i].children){
                     for(let j = 0; j < list[i].children.length; j++) {

                        if(list[i].children[j] == item[0]) {
                            index = j;
                            list[i].children.splice(index,1);
                            break;
                        }
                     }
                }else{*/
                   if(list[i] == item) {
                    index = i;

                     list.splice(index,1);
                    //list[i] =[];

                   /* }*/
                }
            }
        }

        return index;
    }

    onNodeSelect(event){



    }


    onNodeUnSelect(event){
        if(event.node.children){

        }else{

        }
    }

    private createParent(parent,data){
      if(this.dest.length >0){
        for(let j=0;j<this.dest.length;j++){
            if(this.dest[j].label ==parent){
              this.dest[j].children.push({label:data.label,isVisible:true});
            }else{
                  let gc= this.Checkis(data.parent);
                  if(!gc)
                   this.dest.push({label:parent,isVisible:true,children:[]});
            }
         }
      }else{
          this.dest.push({label:parent,isVisible:true,children:[]});
          this.createParent(parent,data);
      }
    }

    private createParent1(parent,data){
      if(this.dest.length >0){
        for(let j=0;j<this.src.length;j++){
            if(this.src[j].label ==parent){
              this.src[j].children.push({label:data.label,isVisible:true});
            }else{
                  let gc= this.Checkis1(data.parent);
                  if(!gc)
                   this.src.push({label:parent,isVisible:true,children:[]});
            }
         }
      }else{
          this.src.push({label:parent,isVisible:true,children:[]});
          this.createParent(parent,data);
      }
    }


moveRight(srcData){
  //  this.dest=Object.assign([], this.tempsrc);
    for(let i=0;i<srcData.length;i++){

        if(typeof srcData[i].parent ==='undefined'){
             let f=this.Checkis(srcData[i]);
             if(!f)
             this.dest.push(srcData[i]);
             this.findIndexInList(srcData[i], this.src);

        }else{
             /*let isParentExist=this.findparent(srcData[i].parent.label,srcData);
             if(isParentExist!=-1){
                 continue;
             }*/
             if(srcData[i].parent.label){
                this.createParent(srcData[i].parent.label,srcData[i]);
                this.removeChildren(srcData[i],this.src);
                this.selectedFiles1=[];
              }
          }

  }


}

private findparent(parent,srcData){
    let index =-1;
    for(let i=0;i<srcData.length;i++){
      if(srcData[i].label && srcData[i].label == parent){
        index= i;
        break;
      }
    }
    return index;
}

private Checkis(data){
  let c=false;
      for(let j=0;j<this.dest.length;j++){
        if(this.dest[j].label == data.label){
          c= true;

          break;
        }
      }
        return c
}

private Checkis1(data){
  let c=false;
      for(let j=0;j<this.src.length;j++){
        if(this.src[j].label == data.label){
          c= true;

          break;
        }
      }
        return c
}

removeChildren(item,list){
  let index=-1;
  for(let i = 0; i < list.length; i++) {
      if(list[i].children){
           for(let j = 0; j < list[i].children.length; j++) {

              if(list[i].children[j].label == item.label) {
                  index = j;
                  list[i].children.splice(index,1);
                  break;
              }
           }
      }
  }
}


  moveLeft(srcData){

    //  this.dest=Object.assign([], this.tempsrc);
      for(let i=0;i<srcData.length;i++){

          if(typeof srcData[i].parent ==='undefined'){
               let f=this.Checkis1(srcData[i]);
               if(!f)
               this.src.push(srcData[i]);
               this.findIndexInList(srcData[i], this.dest);

          }else{
               /*let isParentExist=this.findparent(srcData[i].parent.label,srcData);
               if(isParentExist!=-1){
                   continue;
               }*/
               if(srcData[i].parent.label){
                  this.createParent1(srcData[i].parent.label,srcData[i]);
                  this.removeChildren(srcData[i],this.dest);
                  this.selectedFiles1=[];
                }
            }

    }

  }

}
