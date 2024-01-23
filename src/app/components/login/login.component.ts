import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any = FormGroup;
  validCredentials = {
    username: 'suraj@gmail.com',
    password: 'Suraj@123'
  };

  constructor(private loginserv: LoginService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.credentials = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/)]]
    });
  }

  onSubmit() {


    if (this.credentials.value.username === this.validCredentials.username &&
      this.credentials.value.password === this.validCredentials.password) {

      alert('Credentials are valid. Proceeding with login...');
    } else {

      alert('Invalid credentials. Please check your username and password.');
    }
    console.log("Form is Submitted..");


    this.route.navigate(['Registration'])
  }
}
