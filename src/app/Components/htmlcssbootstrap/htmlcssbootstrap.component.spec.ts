import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcssbootstrapComponent } from './htmlcssbootstrap.component';

describe('HtmlcssbootstrapComponent', () => {
  let component: HtmlcssbootstrapComponent;
  let fixture: ComponentFixture<HtmlcssbootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlcssbootstrapComponent]
    });
    fixture = TestBed.createComponent(HtmlcssbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
