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



    private createParent(parent,data,mysrc){
      if(mysrc.length >0){
        for(let j=0;j<mysrc.length;j++){
            if(mysrc[j].label ==parent){
              let ischild=this.findChildren(mysrc[j].children,data.label);
              if(ischild==-1)
                 mysrc[j].children.push({label:data.label,isVisible:true});
            }else{
                if(data.parent){
                  let gc= this.Checkis(data.parent,mysrc);
                  if(!gc)
                   mysrc.push({label:parent,isVisible:true,children:[]});
                 }
            }
         }
      }else{
          mysrc.push({label:parent,isVisible:true,children:[]});
          this.createParent(parent,data,mysrc);
      }
    }

    private createParent1(parent,data){
      if(this.src.length >0){
        for(let j=0;j<this.src.length;j++){
            if(parent && this.src[j].label ==parent){
              let ischild=this.findChildren(this.src[j].children,data.label);
              if(ischild==-1)
                this.src[j].children.push({label:data.label,isVisible:true});
            }else{
              if(data.parent){
                  let gc= this.Checkis(data.parent,this.src);
                  if(!gc)
                   this.src.push({label:parent,isVisible:true,children:[]});
                 }
            }
         }
      }else{
          this.src.push({label:parent,isVisible:true,children:[]});
          this.createParent1(parent,data);
      }
    }



moveRight(srcData){
    for(let i=0;i<srcData.length;i++){
        if(typeof srcData[i].parent ==='undefined'){
             let f=this.Checkis(srcData[i],this.dest);
             if(!f)
             this.dest.push(srcData[i]);
             this.findIndexInList(srcData[i], this.src);
              this.selectedFiles1=[];

        }else{
             if(srcData[i].parent.label){
                this.createParent(srcData[i].parent.label,srcData[i],this.dest);
                this.removeChildren(srcData[i],this.src);
                this.selectedFiles1=[];
              }
          }
  }
}
moveLeft(srcData){
    for(let i=0;i<srcData.length;i++){
        if(typeof srcData[i].parent ==='undefined'){
             let f=this.Checkis(srcData[i],this.src);
             if(!f)
             this.src.push(srcData[i]);
             this.findIndexInList(srcData[i], this.dest);
             this.selectedFiles2=[];
        }else{
             if(srcData[i].parent.label){
                this.createParent(srcData[i].parent.label,srcData[i],this.src);
                this.removeChildren(srcData[i],this.dest);
                this.selectedFiles2=[];
              }
          }

     }

}

private findChildren(children,label){
  let index =-1;
  for(let i=0;i<children.length;i++){
    if(children[i].label ==label){
      index= i;
      break;
    }
  }

  return index;
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

private Checkis(data,src){
  let c=false;
      for(let j=0;j<src.length;j++){
        if(src[j].label == data.label){
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




}
