import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:8080/api/users';

  constructor(private http: Http) { }

  // get('/api/users')
  getUsers(): Promise<void | User[]> {
    console.log('getUsers');
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  // post("/api/users")
  createUser(newUser: User): Promise<void | User> {
    return this.http.post(this.usersUrl, newUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  // get("/api/contacts/:id") endpoint not used by Angular app

  // delete("/api/contacts/:id")
  deleteUser(delUserId: String): Promise<void | String> {
    console.log('user.service.deleteUser', delUserId);
    return this.http.delete(this.usersUrl + '/' + delUserId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateUser(putUser: User): Promise<void | User> {
    console.log('user.service:put');
    var putUrl = this.usersUrl + '/' + putUser._id;
    return this.http.put(putUrl, putUser)
      .toPromise()
      // .then(response => response.json() as User)
      .then(function(response) {
        console.log('user.service.updateUser', response);
        return response.json() as User;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
