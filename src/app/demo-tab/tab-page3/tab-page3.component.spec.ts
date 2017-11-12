import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPage3Component } from './tab-page3.component';

describe('TabPage3Component', () => {
  let component: TabPage3Component;
  let fixture: ComponentFixture<TabPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
