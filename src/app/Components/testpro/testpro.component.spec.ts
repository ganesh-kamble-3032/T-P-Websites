import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestproComponent } from './testpro.component';

describe('TestproComponent', () => {
  let component: TestproComponent;
  let fixture: ComponentFixture<TestproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestproComponent]
    });
    fixture = TestBed.createComponent(TestproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
