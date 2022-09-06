import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Signup: string = "Signup Title";
  // Form ID
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  date = new Date('2019-01-26T00:00:00');

  triggerFunction() {
    console.log('Timer Ended');
  }
  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email, Validators.required]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPwd: [""]
    }, {
      validators: MustMatch("pwd", "confirmPwd")
    })
  }
  signup() {
    console.log("Here user", this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log("Here data after signup", data);
      }
    )
  }

}
