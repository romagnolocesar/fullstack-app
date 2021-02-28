import { TestBed } from '@angular/core/testing';

import { MilkBoxService } from './milkbox.service';

describe('MilkBoxService', () => {
  let service: MilkBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilkBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
