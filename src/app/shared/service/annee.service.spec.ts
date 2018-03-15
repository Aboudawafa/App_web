import { TestBed, inject } from '@angular/core/testing';

import { AnneeService } from './annee.service';

describe('AnneeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnneeService]
    });
  });

  it('should be created', inject([AnneeService], (service: AnneeService) => {
    expect(service).toBeTruthy();
  }));
});
