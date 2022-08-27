import { TestBed } from '@angular/core/testing';

import { AdmnEmployerService } from './admn-employer.service';

describe('AdmnEmployerService', () => {
  let service: AdmnEmployerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmnEmployerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
