import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../entities/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  public user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public signUp() {
    this.userService.add(this.user).subscribe(data => {
      if (data === false) {
        alert("User detected in system")
      } else {
        alert("Account created!")
        this.router.navigate(["/login"])
      }
    })
  }


}
