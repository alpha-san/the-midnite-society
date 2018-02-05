import { Component, OnInit } from '@angular/core';
import { UserModel, IUserModel } from '../user';
import { UserService } from '../user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: IUserModel[]
  selectedUser: IUserModel

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService
      .getUsers()
      .then((users: IUserModel[]) => {
        if (users !== undefined) {
          this.users = users.map((user) => {
            return user;
          });
        }
      })
  }

  private getIndexOfUser = (userId: String) => {
    return this.users.findIndex((user) => {
      return user._id === userId;
    })
  }

  selectUser(user: IUserModel | null) {
    this.selectedUser = user;
  }

  createNewUser() {
    var user: IUserModel = <IUserModel>{
      _id: '',
      firstName: '',
      lastName: '',
      details: '',
      email: '',
      phone: '',
      createdAt: new Date(),
      modifiedAt: new Date()
    };

    this.selectUser(user);

    // UserModel.createUser('', '', '', '', '').then(res => {
    //   this.selectUser(<IUserModel>res);
    // }, err => {
    //   if (err) {
    //     console.log(err.message);
    //   }
    // });
    // var user: User = {
    //   firstName: '',
    //   lastName: '',
    //   details: '',
    //   email: '',
    //   phone: ''
    // }
  }

  deleteUser = (userId: String) => {
    var idx = this.getIndexOfUser(userId);
    if (idx !== -1) {
      this.users.splice(idx, 1);
      this.selectUser(null);
    }
    return this.users;
  }

  addUser = (user: IUserModel) => {
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }

  updateUser = (user: IUserModel) => {
    var idx = this.getIndexOfUser(user._id);
    if (idx !== -1) {
      this.users[idx] = user;
      this.selectUser(user);
    }
    return this.users;
  }

}
