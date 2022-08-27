import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnMenuComponent } from './admn-menu.component';

describe('AdmnMenuComponent', () => {
  let component: AdmnMenuComponent;
  let fixture: ComponentFixture<AdmnMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
