import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnEmpprofileComponent } from './admn-empprofile.component';

describe('AdmnEmpprofileComponent', () => {
  let component: AdmnEmpprofileComponent;
  let fixture: ComponentFixture<AdmnEmpprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnEmpprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnEmpprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
