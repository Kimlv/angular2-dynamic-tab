import {
  Component, OnInit, ViewEncapsulation, ComponentFactoryResolver,
  ViewChild, ViewContainerRef, Input
} from '@angular/core';
import { IChildComponentDefinition } from './model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
  @Input()
  children: IChildComponentDefinition[] = [];
  @ViewChild('content', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.children.forEach(child => child.createContent(this.container, this.componentFactoryResolver));
  }

  removeChild(tab: IChildComponentDefinition) {
    const index = this.children.indexOf(tab);
    this.children.splice(index, 1);
    this.container.remove(index);
  }

  addChild(newChild: IChildComponentDefinition) {
    this.children.push(newChild);
    newChild.createContent(this.container, this.componentFactoryResolver);
  }
}
