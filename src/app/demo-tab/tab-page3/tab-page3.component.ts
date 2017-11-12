import { ChildComponentBase } from './../../container/model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-page3',
  templateUrl: './tab-page3.component.html',
  styleUrls: ['./tab-page3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabPage3Component extends ChildComponentBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}

