import { CanDeactivateFn } from '@angular/router';

export const pageLeaveGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {

  if (component?.registrationForm?.dirty) {
    let data = confirm("are you sure you want to exit ? ");
    return data;
  }
  return true;

};
