import { TestBed, inject } from '@angular/core/testing';

import { GetPageService } from './get-page.service';

describe('GetPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPageService]
    });
  });

  it('should be created', inject([GetPageService], (service: GetPageService) => {
    expect(service).toBeTruthy();
  }));
});
