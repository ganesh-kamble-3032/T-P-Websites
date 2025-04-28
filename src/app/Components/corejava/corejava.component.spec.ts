import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorejavaComponent } from './corejava.component';

describe('CorejavaComponent', () => {
  let component: CorejavaComponent;
  let fixture: ComponentFixture<CorejavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorejavaComponent]
    });
    fixture = TestBed.createComponent(CorejavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
