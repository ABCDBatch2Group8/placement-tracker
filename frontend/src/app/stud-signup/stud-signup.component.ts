import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudAuthService } from '../stud-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stud-signup',
  templateUrl: './stud-signup.component.html',
  styleUrls: ['./stud-signup.component.css']
})
export class StudSignupComponent implements OnInit {

  constructor(private auth: StudAuthService,private router: Router) { }
  Signin={
    name : '', 
    email: '', 
    dwmsid : '',
    contactNo :'',
    courseInICT : '',
    qualification :'', 
    stream :'',
    password:''
  };
  // form = {
  //   fullname: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   acceptTerms: false,
  // };
  ngOnInit(): void {
  }
  AddUser()
  {    
    this.auth.Signin(this.Signin);
    console.log("Called");    
    // alert("Success");
    // this.router.navigate(['student/login']);
  }
  // onSubmit(): void {
  //   console.log(JSON.stringify(this.form, null, 2));
  // }
  onReset(form: NgForm): void {
    form.reset();
  }
}