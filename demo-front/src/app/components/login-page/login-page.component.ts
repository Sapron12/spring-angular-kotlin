import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public username = '';
  public password = '';
  public invalidLogin = false;
  public hide = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.authenticationService.authenticate(this.username, this.password);
    this.dialog.closeAll();
  }


}
