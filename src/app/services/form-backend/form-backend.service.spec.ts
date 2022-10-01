import { TestBed } from '@angular/core/testing';

import { FormBackendService } from './form-backend.service';

describe('FormBackendService', () => {
  let service: FormBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
