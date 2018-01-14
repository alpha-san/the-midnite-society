import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
// access environment variables from here
// ex: environment.foo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Midnite Society';
  auth: any;

  constructor(private authService: AuthService) { 
    this.auth = authService;
    this.auth.handleAuthentication();
    console.log('we out here', mongoose);
  }
}
