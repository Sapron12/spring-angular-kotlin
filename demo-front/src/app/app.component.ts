import {Component} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-front';
  public authService: AuthenticationService = this.authenticationService;

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }
}
