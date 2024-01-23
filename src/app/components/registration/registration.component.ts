import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegisterForm: any = FormGroup;
  constructor(private fb: FormBuilder,private apiService: ApiService) { }

  ngOnInit(): void {

    this.RegisterForm = this.fb.group({
      // name: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.email]],
      // dob: ['', [Validators.required]], // Add validators as needed
      // mobileno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Add validators as needed
      // adharcard: ['', [Validators.required]], // Add validators as needed
      // address: ['', [Validators.required]], // Add validators as needed
      // country: ['', [Validators.required]], // Add validators as needed
      // gender: ['', [Validators.required]], // Add validators as needed
      // resume: [''] // No specific validators for file input

      name: [], // No validators
      emailId: [],
      password:[],
      dateOfBirth: [], // No validators
      mobileNumber: [],
      adharCard: [],
      address: [],
      country: [],
      gender: [],
      resumeContent: []
   



    });
  }
  
  onSubmit() {
    console.log("hello");
    if (this.RegisterForm.valid) {
      const userData = {
        "name": this.RegisterForm.value.name,
        "emailId": this.RegisterForm.value.emailId, // Correct property name
        "password": this.RegisterForm.value.password,
        "dateOfBirth": this.RegisterForm.value.dateOfBirth,
        "mobileNumber": this.RegisterForm.value.mobileNumber,
        "adharCard": this.RegisterForm.value.adharCard,
        "address": this.RegisterForm.value.address,
        "country": this.RegisterForm.value.country,
        "gender": this.RegisterForm.value.gender,
        "resumeContent": this.RegisterForm.value.resumeContent 
      

      };
  
      this.apiService.registerUser(userData).subscribe(
        (response) => {
          this.data = response;
          console.log('Registration successful:', this.data);
        }
      );
    }
  }
  


  get name() {
    return this.RegisterForm.get('name');
  }

  get email() {
    return this.RegisterForm.get('emailId');
  }
  get password() {
    return this.RegisterForm.get('password');
  }

  get dob() {
    return this.RegisterForm.get('dateOfBirth');
  }

  get mobileno() {
    return this.RegisterForm.get('mobileNumber');
  }

  get adharcard() {
    return this.RegisterForm.get('adharCard');
  }

  get address() {
    return this.RegisterForm.get('address');
  }

  get country() {
    return this.RegisterForm.get('country');
  }

  get gender() {
    return this.RegisterForm.get('gender');
  }

  get resume() {
    return this.RegisterForm.get('resumeContent');
  }


  data: any;

 
  
}