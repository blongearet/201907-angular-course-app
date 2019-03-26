import { TestBed, async, inject } from '@angular/core/testing';

import { IdIsValidIdGuard } from './id-is-valid-id-guard.service';

describe('IdIsValidIdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdIsValidIdGuard]
    });
  });

  it('should ...', inject([IdIsValidIdGuard], (guard: IdIsValidIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
