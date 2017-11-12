import { TabHeaderComponent } from './dynamic-tab/tab-header/tab-header.component';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabPage1Component } from './demo-tab/tab-page1/tab-page1.component';
import { TabPage2Component } from './demo-tab/tab-page2/tab-page2.component';
import { TabPage3Component } from './demo-tab/tab-page3/tab-page3.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPage1Component,
    TabPage2Component,
    TabPage3Component,
    ContainerComponent,
    DynamicTabComponent,
    TabHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[TabPage1Component, TabPage2Component, TabPage3Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
