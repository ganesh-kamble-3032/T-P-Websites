import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XproComponent } from './xpro.component';

describe('XproComponent', () => {
  let component: XproComponent;
  let fixture: ComponentFixture<XproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XproComponent]
    });
    fixture = TestBed.createComponent(XproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
