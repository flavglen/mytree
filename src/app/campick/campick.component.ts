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

      if(event.node.children){
        this.tempsrc.push(event.node);
      }else{
         this.tempsrc.push(event.node);

        /*for(let i=0;i<event.node.parent.children.length;i++){
            if(event.node.parent.children[i].label ==event.node.label){
                  console.log(event.node.parent.children[i]);
            }else{
                event.node.parent.children.splice(i,1);
                console.log(i);
            }
        }*/

      }

    }

    private removeFromSrc(parent,list){
        if(list.length>0){
            for(let i = 0; i < list.length; i++) {
                if(list[i].parent == parent){
                  if(typeof list[i].parent==='undefined'){
                    if(list[i].label == parent){
                      list.splice(i,1);
                    }
                  }
                  list.splice(i,1);
                  this.removeFromSrc(parent,list);
                }
            }
          }

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

                this.dest.push({label:parent,isVisible:true,children:[]});
            }
         }
      }else{
          this.dest.push({label:parent,isVisible:true,children:[]});
          this.createParent(parent,data);
      }
    }

    private reorderArray(srcData)
    {
      let parentArray=[];
      for(let m=0;m<srcData.length;m++){
         if(typeof srcData[m].parent ==='undefined'){
                parentArray.push(srcData[m]);
                srcData.splice(m,1);
              /*for(let j=0;j<srcData[m].children.length;j++){
                   if(srcData.indexOf(srcData[m].children[j].label)){
                     srcData.splice(j,1);
                      console.log(j);
                   }
              }*/
         }
      }

      for(let m=0;m<parentArray.length;m++){
             srcData.splice(m,1,parentArray[m]);
      }


      console.log(srcData);
    }

moveRight(srcData){
  //  this.dest=Object.assign([], this.tempsrc);

    //this.reorderArray(srcData);

    for(let i=0;i<srcData.length;i++){

        if(typeof srcData[i].parent ==='undefined'){
             let f=this.Checkis(srcData[i]);
             if(!f)
             this.dest.push(srcData[i]);
             this.findIndexInList(srcData[i], this.src);
             //this.removeFromSrc(srcData[i].label,srcData);
             //srcData=[];
            // srcData.length=0;

        }else{
             let isParentExist=this.findparent(srcData[i].parent.label,srcData);
             if(isParentExist!=-1){
                 continue;
             }
             
             if(srcData[i].parent.label)
               this.createParent(srcData[i].parent.label,srcData[i]);
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
        if(this.dest[j] == data){
          c= true;

          break;
        }
      }
        return c
}
  moveRight1(srcData){

    for(let i=0;i<srcData.length;i++){
      if(!srcData[i].parent){
        if(this.dest.length >0){
          for(let j=0;j<this.dest.length;j++){
              if(this.dest[j]==srcData[i]){
                  continue;
              }else{
                   this.findIndexInList(srcData[i], this.src);
                   this.dest.push(srcData[i]);
                   this.selectedFiles1=[];

              }
          }
        }else{
           this.findIndexInList(srcData[i], this.src);
           this.dest.push(srcData[i]);
           this.selectedFiles1=[];

        }

      }else{

        if(this.dest.length >0){



        }else{
          let temp=  Object.create([],srcData[i].parent.children);
          console.log(temp);
          for(let k=0;k<temp.length;k++){
            if(temp[k].label == srcData[i].label){


            }else{
                  temp.splice(k,1);
            }
          }

          this.dest.push(temp);

        }

        /*  if(this.dest.length >0){
            for(let j=0;j<this.dest.length;j++){
                if(this.dest[j]==srcData[i].parent){
                //this.dest[j].children.push({"label": srcData[i].label,"isVisible":true});
                 continue;
                }else{

                    console.log(this.dest[j]);
                    this.dest[j].children.push({"label": srcData[i].label,"isVisible":true});

                  //this.dest[j].children.push({"label": srcData[i].label,"isVisible":true});
                  //console.log('*****');
                }
              }
            }else{
                  this.dest.push({"label": srcData[i].parent.label,"isVisible":true,"children":[]});
                  this.moveRight(srcData);


              }
          }

      }*/

       }
     }
    }



  moveLeft(destdata){

     for(let i=0;i<destdata.length;i++){
      if(destdata[i].children){
        if(this.src.length >0){
          for(let j=0;j<this.dest.length;j++){
              if(this.src[j]==destdata[i]){
                console.log('**');
              }else{
                  this.src.push(destdata[i]);
                   this.findIndexInList(destdata[i], this.dest);
              }
          }
        }else{

           this.src.push(destdata[i]);
           this.findIndexInList(destdata[i], this.dest);
        }

      }else{
          //this.dest.push(srcData[i].parent)
      }

    }
  }

}
