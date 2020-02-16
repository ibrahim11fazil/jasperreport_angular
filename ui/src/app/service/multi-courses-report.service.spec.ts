import { TestBed } from '@angular/core/testing';

import { MultiCoursesReportService } from './multi-courses-report.service';

describe('MultiCoursesReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiCoursesReportService = TestBed.get(MultiCoursesReportService);
    expect(service).toBeTruthy();
  });
});
