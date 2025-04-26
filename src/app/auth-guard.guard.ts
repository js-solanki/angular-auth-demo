import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth-service.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const myService = inject(AuthService);
  if (myService.getLogin()) {
    return true;
  } else {
    alert("please login");
    return false;
  }
};
