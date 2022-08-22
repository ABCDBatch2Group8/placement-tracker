import { TestBed } from '@angular/core/testing';

import { AdmnAuthService } from './admn-auth.service';

describe('AdmnAuthService', () => {
  let service: AdmnAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmnAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
