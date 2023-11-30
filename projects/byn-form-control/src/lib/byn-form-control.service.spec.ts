import { TestBed } from '@angular/core/testing';

import { BynFormControlService } from './byn-form-control.service';

describe('BynFormControlService', () => {
  let service: BynFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BynFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
