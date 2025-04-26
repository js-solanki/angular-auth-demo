import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { pageLeaveGuard } from './page-leave.guard';

describe('pageLeaveGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pageLeaveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
