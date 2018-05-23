import { TestBed, inject } from '@angular/core/testing';

import { AbsenceEtudiantService } from './absence-etudiant.service';

describe('AbsenceEtudiantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbsenceEtudiantService]
    });
  });

  it('should be created', inject([AbsenceEtudiantService], (service: AbsenceEtudiantService) => {
    expect(service).toBeTruthy();
  }));
});
