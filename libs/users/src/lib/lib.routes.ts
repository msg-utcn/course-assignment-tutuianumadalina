import { Route } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';

export const usersRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  { path: '', component: UsersComponent },
];
