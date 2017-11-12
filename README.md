# angular2-dynamic-tab
The idea is to create a container component which have ability to add/remove child component dynamically. It also supports binding children list from outside.
For example:
<app-dynamic-tab #tab [children]="tabPages"></app-dynamic-tab>
