import { Injectable } from '@angular/core';
import { UserModel, IUserModel } from './user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = '/api/users';

  constructor(private http: Http) { }

  // get('/api/users')
  getUsers(): Promise<void | IUserModel[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as IUserModel[])
      .catch(this.handleError);
  }

  // post("/api/users")
  createUser(newUser: IUserModel): Promise<void | IUserModel> {
    return this.http.post(this.usersUrl, newUser)
      .toPromise()
      .then(response => response.json() as IUserModel)
      .catch(this.handleError);
  }

  // get("/api/contacts/:id") endpoint not used by Angular app

  // delete("/api/contacts/:id")
  deleteUser(delUserId: String): Promise<void | String> {
    return this.http.delete(this.usersUrl + '/' + delUserId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateUser(putUser: IUserModel): Promise<void | IUserModel> {
    var putUrl = this.usersUrl + '/' + putUser._id;
    return this.http.put(putUrl, putUser)
      .toPromise()
      .then(function(response) {
        return response.json() as IUserModel;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
