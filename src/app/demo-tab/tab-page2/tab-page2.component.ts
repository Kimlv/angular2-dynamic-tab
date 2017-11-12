import { ChildComponentBase } from './../../container/model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-page2',
  templateUrl: './tab-page2.component.html',
  styleUrls: ['./tab-page2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabPage2Component extends ChildComponentBase implements OnInit {

  constructor() {
    super();
 }

  ngOnInit() {
  }

}
