import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //FormGroup represents entire form
  //FormControl 1 single form control
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      //make a call to backend to check whether the combination is valid
      console.log(this.loginForm.value);
    } else {
      alert('The form is invalid');
      this.loginForm.reset;
    }
  }
}
