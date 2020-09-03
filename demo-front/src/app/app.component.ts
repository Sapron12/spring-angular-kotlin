import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-front';
  public authService: AuthenticationService = this.authenticationService;

  constructor(
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) {
  }

  openSignIn(): void {
    this.dialog.open(LoginPageComponent);
  }

  openSingUp(): void {
    this.dialog.open(RegistrationPageComponent);
  }
}
