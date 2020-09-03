import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../entities/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_PART = 'http://localhost:8080/user/';
  private ALL = 'all';
  private ADD = 'registration';
  private DELETE = 'delete/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.USER_PART + this.ALL);
  }

  public delete(user): Observable<User> {
    return this.httpClient.delete<User>(this.USER_PART + this.DELETE + user.id);
  }

  public add(user): Observable<boolean> {
    return this.httpClient.post<boolean>(this.USER_PART + this.ADD, user);
  }
}
