import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {User} from '../../entities/User';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor {

  private currentUser: User;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  authenticate(username, password): void {
    const basic = 'Basic ' + btoa(username + ':' + password);
    const headers = new HttpHeaders({Authorization: basic});
    this.httpClient.get<boolean>('http://localhost:8080/user/validate', {headers}).subscribe(
      userData => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('basicauth', basic);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );

  }

  getCurrentUserFromBack(): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8080/session/current-user');
  }

  private getCurrentUserSubscribe(): void {
    this.getCurrentUserFromBack().subscribe(value => {
      this.currentUser = value;
    });
  }

  public getCurrentUser(): any {
    return this.currentUser;
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut(): void {
    this.httpClient.get('http://localhost:8080/user/logout').subscribe(data => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('basicauth');
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      });
    }
    return next.handle(req);
  }
}
