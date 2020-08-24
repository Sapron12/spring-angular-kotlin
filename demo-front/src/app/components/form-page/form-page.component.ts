import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Form} from "../../entities/Form";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  form: Form

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  addForm(): void {

  }

}
