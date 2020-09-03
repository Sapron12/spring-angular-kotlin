import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../../entities/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_PART = 'http://localhost:8080/user/'
  private ALL = "all"
  private ADD = "registration"
  private DELETE = "delete/"

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAll() {
    return this.httpClient.get<User[]>(this.USER_PART + this.ALL)
  }

  public delete(user) {
    return this.httpClient.delete<User>(this.USER_PART + this.DELETE + user.id);
  }

  public add(user) {
    return this.httpClient.post<Boolean>(this.USER_PART + this.ADD, user)
  }
}
