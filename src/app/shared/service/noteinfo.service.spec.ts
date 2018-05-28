import { TestBed, inject } from '@angular/core/testing';

import { NoteinfoService } from './noteinfo.service';

describe('NoteinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteinfoService]
    });
  });

  it('should be created', inject([NoteinfoService], (service: NoteinfoService) => {
    expect(service).toBeTruthy();
  }));
});
