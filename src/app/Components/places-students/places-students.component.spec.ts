import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesStudentsComponent } from './places-students.component';

describe('PlacesStudentsComponent', () => {
  let component: PlacesStudentsComponent;
  let fixture: ComponentFixture<PlacesStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesStudentsComponent]
    });
    fixture = TestBed.createComponent(PlacesStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
