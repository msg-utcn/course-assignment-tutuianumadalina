import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'course-project-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(private userService: UserService) {}

  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
