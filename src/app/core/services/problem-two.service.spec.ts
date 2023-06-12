import { TestBed } from '@angular/core/testing';

import { ProblemTwoService } from './problem-two.service';

describe('ProblemTwoService', () => {
  let service: ProblemTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
