import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnCandidatesComponent } from './admn-candidates.component';

describe('AdmnCandidatesComponent', () => {
  let component: AdmnCandidatesComponent;
  let fixture: ComponentFixture<AdmnCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
