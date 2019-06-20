import { TestBed } from '@angular/core/testing';

import { SystemUserService } from './system-user.service';

describe('SystemUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemUserService = TestBed.get(SystemUserService);
    expect(service).toBeTruthy();
  });
});
