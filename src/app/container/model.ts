import { OnInit, ViewContainerRef, ComponentRef, ComponentFactoryResolver
    , ElementRef, HostBinding, Injector, Component } from '@angular/core';

export interface IChildComponentDefinition {
    id: number;
    name: string;
    visible: boolean;
    content: ComponentRef<ChildComponentBase>;
    createContent(container: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver);
}

export class ChildComponentDefinition<T extends ChildComponentBase> implements IChildComponentDefinition {
    content: ComponentRef<ChildComponentBase>;
    private _visible = false;
    get visible() {
        return this._visible;
    }

    set visible(value: boolean) {
        if (this._visible === value) {
            return;
        }
        this._visible = value;
        this.content.instance.setVisible(this._visible);
    }

    constructor(public id: number, public name: string, private component: new (...args) => T) {
    }

    createContent(container: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver) {
        const factory = componentFactoryResolver.resolveComponentFactory<T>(this.component);
        this.content = container.createComponent(factory);
        this.content.instance.datasource = this;
    }
}

export class ChildComponentBase implements OnInit {
    @HostBinding('style.display')
    private displayStyle: string;
    datasource: IChildComponentDefinition;

    constructor() {
    }

    getCommands(): Command[] {
        return [];
    }

    ngOnInit() {
    }

    setVisible(visible: boolean) {
        this.displayStyle = visible ? 'block' : 'none';
    }
}

export class Command {
    constructor(
        public displayText: string
        , public canExecute: () => boolean
        , public execute: () => void
        , public primary: boolean = false) {
    }
}
