import { TestBed, inject } from '@angular/core/testing';

import { TypeRiskService } from './type-risk.service';

describe('TypeRiskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeRiskService]
    });
  });

  it('should be created', inject([TypeRiskService], (service: TypeRiskService) => {
    expect(service).toBeTruthy();
  }));
});
