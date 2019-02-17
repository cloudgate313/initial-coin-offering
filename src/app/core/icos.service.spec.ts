import { TestBed } from '@angular/core/testing';

import { ICOsService } from './icos.service';

describe('ICOsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ICOsService = TestBed.get(ICOsService);
    expect(service).toBeTruthy();
  });
});
