import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdacComponent } from './pdac.component';

describe('PdacComponent', () => {
  let component: PdacComponent;
  let fixture: ComponentFixture<PdacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdacComponent]
    });
    fixture = TestBed.createComponent(PdacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
