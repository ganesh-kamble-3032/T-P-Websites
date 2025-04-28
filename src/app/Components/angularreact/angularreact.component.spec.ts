import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularreactComponent } from './angularreact.component';

describe('AngularreactComponent', () => {
  let component: AngularreactComponent;
  let fixture: ComponentFixture<AngularreactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularreactComponent]
    });
    fixture = TestBed.createComponent(AngularreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
