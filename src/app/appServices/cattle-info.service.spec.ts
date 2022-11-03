import { TestBed } from '@angular/core/testing';

import { CattleInfoService } from './cattle-info.service';

describe('CattleInfoService', () => {
  let service: CattleInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CattleInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
