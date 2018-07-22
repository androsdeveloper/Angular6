import { TestBed, inject } from '@angular/core/testing';

import { TypeCoveringService } from './type-covering.service';

describe('TypeCoveringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeCoveringService]
    });
  });

  it('should be created', inject([TypeCoveringService], (service: TypeCoveringService) => {
    expect(service).toBeTruthy();
  }));
});
