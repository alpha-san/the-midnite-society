import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserMockService {

  constructor() { }

  getUsers(): Promise<void | User[]> {
    let promise: Promise<void | User[]> = new Promise((resolve, reject) => {
      let result: User[] = [new User(), new User()];
      resolve(result);
    });
    return promise;
  }

  createUser(newUser: User): Promise<void | User> {
    let promise: Promise<void | User> = new Promise((resolve, reject) => {
      resolve(new User(newUser));
    });
    return promise;
  }


  deleteUser(delUserId: String): Promise<void | String> {
    let promise: Promise<void | String> = new Promise((resolve, reject) => {
      resolve(delUserId);
    });
    return promise;
  }

  updateUser(putUser: User): Promise<void | User> {
    let promise: Promise<void | User> = new Promise((resolve, reject) => {
      resolve(new User(putUser));
    });
    return promise;
  }

}
