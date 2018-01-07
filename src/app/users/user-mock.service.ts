import { Injectable } from '@angular/core';
import { IUserModel, UserModel } from './user';

@Injectable()
export class UserMockService {

  constructor() { }

  // getUsers(): Promise<void | IUserModel[]> {
    // let promise: Promise<void | IUserModel[]> = new Promise((resolve, reject) => {
      // let result: IUserModel[] = [
      //   UserModel.createUser('Barack', 'Obama', 'barackobama@gmail.com', '555-555-5555', 'President'), 
      //   UserModel.createUser('Barack', 'Obama', 'barackobama@gmail.com', '555-555-5555', 'President')];
      // resolve(result);
    // });
    // return promise;
  // }

  // createUser(newUser: IUserModel): Promise<void | IUserModel> {
  //   let promise: Promise<void | IUserModel> = new Promise((resolve, reject) => {
      // resolve(new User(newUser));
  //   });
  //   return promise;
  // }


  // deleteUser(delUserId: String): Promise<void | String> {
  //   let promise: Promise<void | String> = new Promise((resolve, reject) => {
  //     resolve(delUserId);
  //   });
  //   return promise;
  // }

  // updateUser(putUser: IUserModel): Promise<void | IUserModel> {
  //   let promise: Promise<void | IUserModel> = new Promise((resolve, reject) => {
  //     // resolve(new User(putUser));
  //   });
  //   return promise;
  // }

}
