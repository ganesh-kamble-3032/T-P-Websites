import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxdesignComponent } from './uiuxdesign.component';

describe('UiuxdesignComponent', () => {
  let component: UiuxdesignComponent;
  let fixture: ComponentFixture<UiuxdesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiuxdesignComponent]
    });
    fixture = TestBed.createComponent(UiuxdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
