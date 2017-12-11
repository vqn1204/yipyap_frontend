import { TestBed, inject } from '@angular/core/testing';

import { YipyapService } from './yipyap.service';

describe('YipyapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YipyapService]
    });
  });

  it('should be created', inject([YipyapService], (service: YipyapService) => {
    expect(service).toBeTruthy();
  }));
});
