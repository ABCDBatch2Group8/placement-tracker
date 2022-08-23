import { TestBed } from '@angular/core/testing';

import { StudAuthService } from './stud-auth.service';

describe('StudAuthService', () => {
  let service: StudAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
