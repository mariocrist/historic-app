import { TestBed } from '@angular/core/testing';

import { HistoricApiService } from './historic-api.service';

describe('HistoricApiService', () => {
  let service: HistoricApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
