import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudProfilepageComponent } from './stud-profilepage.component';

describe('StudProfilepageComponent', () => {
  let component: StudProfilepageComponent;
  let fixture: ComponentFixture<StudProfilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudProfilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
