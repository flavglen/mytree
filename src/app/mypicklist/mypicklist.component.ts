import { Component, OnInit,ElementRef,TemplateRef} from '@angular/core';
import {PickList} from 'primeng/primeng';
import {ObjectUtils} from '../../../node_modules/primeng/components/utils/objectutils';
import {DomHandler} from '../../../node_modules/primeng/components/dom/domhandler';
import {SharedModule,PrimeTemplate} from '../../../node_modules/primeng/components/common/shared';

@Component({
  selector: 'app-mypicklist',
  templateUrl: './mypicklist.component.html',
  styleUrls: ['./mypicklist.component.css'],
  providers: [DomHandler,ObjectUtils]
})
export class MypicklistComponent extends PickList  {

  constructor(public el: ElementRef, public domHandler: DomHandler, public objectUtils: ObjectUtils) {
    super(el,domHandler,objectUtils);
  }


}
