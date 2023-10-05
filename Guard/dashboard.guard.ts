import { CanActivateFn } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("email")){
  return true;
}
else{
  return false
}
};
