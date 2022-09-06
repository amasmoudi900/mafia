import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any = {};
  name: string = "Abderrahmen";
  message: string;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log("here into login", this.user);
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log("Here data after login", data.message);
        console.log("Here data after login", data.user);
        if (!(data.user)) {
          this.message = "Please check Email/Pwd";
        } else {
          localStorage.setItem("connectedUser", JSON.stringify(data.user));
          if (data.user.role == "admin") {
            this.router.navigate(["admin"]);
          } else {
            this.router.navigate([""]);
          }
        }
      }
    )
  }

}
