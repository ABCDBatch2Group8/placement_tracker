import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnEmployerComponent } from './admn-employer.component';

describe('AdmnEmployerComponent', () => {
  let component: AdmnEmployerComponent;
  let fixture: ComponentFixture<AdmnEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
