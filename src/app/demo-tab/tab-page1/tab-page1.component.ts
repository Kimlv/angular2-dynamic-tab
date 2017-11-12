import { ChildComponentBase } from './../../container/model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-page1',
  templateUrl: './tab-page1.component.html',
  styleUrls: ['./tab-page1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabPage1Component extends ChildComponentBase implements OnInit {

  constructor() {
    super();
 }

  ngOnInit() {
  }

}
