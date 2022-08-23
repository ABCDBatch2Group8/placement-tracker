import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }
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
