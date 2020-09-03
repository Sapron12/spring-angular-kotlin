import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../entities/User';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  public user: User = new User();
  public hide = true;
  public form: FormGroup = new FormGroup({
    tel: new FormControl(),
    pass: new FormControl(),
    name: new FormControl()
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  public signUp(): void {
    this.userService.add(this.user).subscribe(data => {
      if (data === false) {
        alert('User detected in system');
      } else {
        alert('Account created!');
      }
    });
    this.dialog.closeAll();
  }
}
