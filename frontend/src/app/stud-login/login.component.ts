import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={email:'',
  password:''}
  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginUser(this.user)
    
    .subscribe({
      next: res => {
            localStorage.setItem('token', res.token)
            // this._router.navigate(['/'])
            Swal.fire({
              toast: true,
              color:'green',
              background:'banana',
              icon: 'error',
              title: 'verified',
              position: 'center-right',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            });
          } ,
      error: err => {
            console.log(err);
            Swal.fire({
              toast: true,
              color:'red',
              background:'yellow',
              icon: 'error',
              title: 'wrong email or password',
              position: 'center-right',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            });
            this._router.navigate(['student/signup'])
          }
   }); 
   }
}
