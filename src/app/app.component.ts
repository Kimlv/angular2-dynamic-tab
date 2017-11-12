import { ChildComponentDefinition } from './container/model';
import { TabHeaderComponent } from './dynamic-tab/tab-header/tab-header.component';
import { Component, ComponentRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TabPage1Component } from './demo-tab/tab-page1/tab-page1.component';
import { TabPage3Component } from './demo-tab/tab-page3/tab-page3.component';
import { TabPage2Component } from './demo-tab/tab-page2/tab-page2.component';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  selectedValue = 'Tab1';
  newTabName = '';
  @ViewChild(DynamicTabComponent) tab: DynamicTabComponent;
  tabPages = [
    new ChildComponentDefinition(0, 'Tab 1', TabPage1Component),
    new ChildComponentDefinition(1, 'Tab 2', TabPage2Component),
    new ChildComponentDefinition(2, 'Tab 3', TabPage3Component)
  ];

  add() {
    switch (this.selectedValue) {
      case 'Tab1':
        this.tab.addChild(new ChildComponentDefinition(0, this.newTabName, TabPage1Component));
        break;
      case 'Tab2':
        this.tab.addChild(new ChildComponentDefinition(0, this.newTabName, TabPage2Component));
        break;
      case 'Tab3':
        this.tab.addChild(new ChildComponentDefinition(0, this.newTabName, TabPage3Component));
        break;
    }
  }

  remove() {
    this.tab.removeSelectedTab();
  }

  ngAfterViewInit() {
  }

  onSelectChange(value) {
    this.selectedValue = value;
  }
}
