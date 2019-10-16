import { TestBed } from '@angular/core/testing';

import { AutoLogoutServiceService } from './auto-logout-service.service';

describe('AutoLogoutServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoLogoutServiceService = TestBed.get(AutoLogoutServiceService);
    expect(service).toBeTruthy();
  });
});
