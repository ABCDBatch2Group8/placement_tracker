import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudFormP2Component } from './stud-form-p2.component';

describe('StudFormP2Component', () => {
  let component: StudFormP2Component;
  let fixture: ComponentFixture<StudFormP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudFormP2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudFormP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
