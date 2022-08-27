import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudContactUspageComponent } from './stud-contact-uspage.component';

describe('StudContactUspageComponent', () => {
  let component: StudContactUspageComponent;
  let fixture: ComponentFixture<StudContactUspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudContactUspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudContactUspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
