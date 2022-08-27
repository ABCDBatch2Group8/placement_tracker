import { TestBed } from '@angular/core/testing';

import { AdmnCandidatesService } from './admn-candidates.service';

describe('AdmnCandidatesService', () => {
  let service: AdmnCandidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmnCandidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
