import { UserRole } from '../../../../../apps/api/src/app/users/models/user-role.model';

export enum UsersTopic {
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
}
export interface UserModel {
  id?: string;
  name?: string;
  email?: string;
  roles?: UserRole[];
}
