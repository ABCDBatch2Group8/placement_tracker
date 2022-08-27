import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudJoblistComponent } from './stud-joblist.component';

describe('StudJoblistComponent', () => {
  let component: StudJoblistComponent;
  let fixture: ComponentFixture<StudJoblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudJoblistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
