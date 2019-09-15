import { TestBed } from '@angular/core/testing';

import { TrainingSystemServiceService } from './training-system-service.service';

describe('TrainingSystemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingSystemServiceService = TestBed.get(TrainingSystemServiceService);
    expect(service).toBeTruthy();
  });
});
