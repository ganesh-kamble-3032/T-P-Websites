import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FECComponent } from './fec.component';

describe('FECComponent', () => {
  let component: FECComponent;
  let fixture: ComponentFixture<FECComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FECComponent]
    });
    fixture = TestBed.createComponent(FECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
