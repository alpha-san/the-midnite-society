import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: User[]
  selectedUser: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUsers()
      .then((users: User[]) => {
        this.users = users.map((user) => {
          // if (!contact.phone) {
          //   contact.phone = {
          //     mobile: '',
          //     work: ''
          //   }
          // }
          return user;
        })
      })
  }

  private getIndexOfUser = (userId: String) => {
    return this.users.findIndex((user) => {
      return user._id === userId;
    })
  }

  selectUser(user: User | null) {
    this.selectedUser = user;
  }

  // details: string;
  // email: string;
  // soundcloudUrl: string;
  // twitterUrl: string;
  // facebookUrl: string;
  // instagramUrl: string;
  // snapchatUrl: string;
  // phone: string;

  createNewUser() {
    var user: User = {
      firstName: '',
      lastName: '',
      details: '',
      email: '',
      soundcloudUrl: '',
      twitterUrl: '',
      facebookUrl: '',
      instagramUrl: '',
      snapchatUrl: '',
      phone: ''
    }

    this.selectUser(user);
  }

  deleteContact = (userId: String) => {
    var idx = this.getIndexOfUser(userId);
    if (idx !== -1) {
      this.users.splice(idx, 1);
      // this.selectedUser(null);
    }
    return this.users;
  }

  addContact = (user: User) => {
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }

  updateUser = (user: User) => {
    var idx = this.getIndexOfUser(user._id);
    if (idx !== -1) {
      this.users[idx] = user;
      this.selectUser(user);
    }
    return this.users;
  }

}
