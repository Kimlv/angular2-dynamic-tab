import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPage1Component } from './tab-page1.component';

describe('TabPage1Component', () => {
  let component: TabPage1Component;
  let fixture: ComponentFixture<TabPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
