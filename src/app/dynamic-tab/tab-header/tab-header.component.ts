import { IChildComponentDefinition } from './../../container/model';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabHeaderComponent implements OnInit {
  @Input() tabs: IChildComponentDefinition[];
  @Output() onSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectTab(item) {
    this.onSelect.emit(item);
  }
}
