import { Component, OnInit, Input } from '@angular/core';
// import { IUserModel, UserSchema } from '../user';
import { IUserModel } from '../user';
import { UserService } from '../user.service';
import * as assert from 'assert';

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
    console.log('mongoose', mongoose);
    this.validationTest();
  }

  createUser(user: IUserModel) {
    console.log('createUser', user);
    if (this.validateUser(user)) {
      this.userService.createUser(user).then((newUser: IUserModel) => {
        this.createHandler(newUser);
      });
    }
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

  validationTest() {
    var foodSchema = new mongoose.Schema({name : {type: String, required: true}});
    var doc = new mongoose.Document({}, foodSchema);
    doc.validate(function(error) {
      console.log('error', error);
    });
  }

  validateUser(user: IUserModel) {

    // var doc = new mongoose.Document({}, UserSchema);
    // doc.validate(error => {
      // console.log('error', error);
    //   return false;
    // });

    return true;
  }

}
