import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudSettingspageComponent } from './stud-settingspage.component';

describe('StudSettingspageComponent', () => {
  let component: StudSettingspageComponent;
  let fixture: ComponentFixture<StudSettingspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudSettingspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudSettingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
