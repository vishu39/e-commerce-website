import { TestBed } from '@angular/core/testing';

import { AllproductService } from './allproduct.service';

describe('AllproductService', () => {
  let service: AllproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
