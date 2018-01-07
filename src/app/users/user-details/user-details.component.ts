import { Component, OnInit, Input } from '@angular/core';
import { IUserModel } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: IUserModel;

  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser(user: IUserModel) {
    this.userService.createUser(user).then((newUser: IUserModel) => {
      this.createHandler(newUser);
    });
  }

  updateUser(user: IUserModel) {
    this.userService.updateUser(user).then((updatedUser: IUserModel) => {
      this.updateHandler(updatedUser);
    });
  }

  deleteUser(userId: String): void {
    this.userService.deleteUser(userId).then((deletedUserId: String) => {
      this.deleteHandler(deletedUserId);
    });
  }

}
