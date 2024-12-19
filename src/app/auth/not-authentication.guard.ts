import { CanActivateFn } from '@angular/router';

export const notAuthenticationGuard: CanActivateFn = (route, state) => {
  return true;
};
