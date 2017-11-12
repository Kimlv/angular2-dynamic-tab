import { IChildComponentDefinition } from './../container/model';
import { ContainerComponent } from './../container/container.component';
import {
  Component, OnInit, ViewEncapsulation, ComponentFactoryResolver
  , ViewContainerRef, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamic-tab.component.html',
  styleUrls: ['./dynamic-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicTabComponent extends ContainerComponent implements OnInit {
  selectedTab: IChildComponentDefinition;
  tabHeaderVisible = true;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const tab = this.children.find(t => t.visible) || this.children[0];
    this.setSelectedTab(tab);
  }
  getTabs() {
    return this.children;
  }

  setSelectedTab(tab: IChildComponentDefinition) {
    if (tab.visible === true && tab.content) {
      return;
    }

    const activeTab: IChildComponentDefinition = this.children.find(t => t.visible);
    if (activeTab) {
      activeTab.visible = false;
    }

    if (!tab.content) {
      tab.createContent(this.container, this.componentFactoryResolver);
    }

    tab.visible = true;
    this.selectedTab = tab;
  }

  removeChild(tab: IChildComponentDefinition) {
    const index = this.children.indexOf(tab);
    this.selectedTab.visible = false;
    this.children.splice(index, 1);
    this.container.remove(index);
    if (this.children.length > 0) {
      this.setSelectedTab(this.children[0]);
    }
  }

  addChild(newTab: IChildComponentDefinition) {
    this.children.push(newTab);
  }

  removeSelectedTab() {
    if (this.selectedTab) {
      this.removeChild(this.selectedTab);
    }
  }
}
