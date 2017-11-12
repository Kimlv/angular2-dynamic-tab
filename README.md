# angular2-dynamic-tab
### The idea is to create a container component which have ability to add/remove child component dynamically.
*Example:*
```
// add new component
this.tab.addChild(new ChildComponentDefinition(0, this.newTabName, TabPage1Component));

// remove component
this.tab.removeSelectedTab();
```

### It also supports binding children list from outside.
*Example:*
```
// define data for binding
tabPages = [
    new ChildComponentDefinition(0, 'Tab 1', TabPage1Component),
    new ChildComponentDefinition(1, 'Tab 2', TabPage2Component),
    new ChildComponentDefinition(2, 'Tab 3', TabPage3Component)
  ];

// binding
<app-dynamic-tab #tab [children]="tabPages"></app-dynamic-tab>
```