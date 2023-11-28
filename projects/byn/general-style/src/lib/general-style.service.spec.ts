import { TestBed } from '@angular/core/testing';

import { GeneralStyleService } from './general-style.service';

describe('GeneralStyleService', () => {
  let service: GeneralStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
