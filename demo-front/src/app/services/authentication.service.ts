import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {User} from "../entities/User";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor {

  private currentUser: User

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<Boolean>('http://localhost:8080/user/validate', {headers}).subscribe(
      userData => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('basicauth', 'Basic ' + btoa(username + ':' + password))
        this.router.navigate(["/"])
      }
    );

  }

  getCurrentUserFromBack() {
    return this.httpClient.get<User>('http://localhost:8080/session/current-user')
  }

  private getCurrentUserSubscribe() {
    this.getCurrentUserFromBack().subscribe(value => {
      this.currentUser = value
    })
  }

  public getCurrentUser() {
    return this.currentUser
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    this.httpClient.get('http://localhost:8080/user/logout').subscribe(data => {
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('basicauth')
      this.router.navigate([''])
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INTERCEPT")
    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      })
    }
    return next.handle(req);
  }
}
