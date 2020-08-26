import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../entities/User";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";
import {async} from "rxjs/internal/scheduler/async";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, public authService: AuthenticationService) {
  }


  ngOnInit(): void {
    this.userService.getAll().subscribe(
      response => this.handleSuccessfulResponse(response)
    )
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

}
