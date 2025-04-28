import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutClientsComponent } from './out-clients.component';

describe('OutClientsComponent', () => {
  let component: OutClientsComponent;
  let fixture: ComponentFixture<OutClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutClientsComponent]
    });
    fixture = TestBed.createComponent(OutClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
