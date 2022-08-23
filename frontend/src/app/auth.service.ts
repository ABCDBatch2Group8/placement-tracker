import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private _router:Router) { }
  Signin(item:any)
  {   
    // return this.http.post("http://localhost:3000/users/signin",{"users":item})
    return this.http.post("http://localhost:3000/student/signin",{"data":item})
    .subscribe(data =>{
      console.log(data)
      let x= JSON.stringify(data)
      if(x.match(/Success/)){
        Swal.fire({
          toast: true,
          color:'green',
          background:'yellow',
          icon: 'success',
          title: 'success',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        this._router.navigate(['/student/login'])
      }
      else if(x.match(/Email/)){
        Swal.fire({
          toast: true,
          color:'red',
          background:'',
           icon: 'info',
          title: 'Email already registered',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        // alert("User Email already registered")
      }
      else if(x.match(/no/)){
        Swal.fire({
          toast: true,
          color:'red',
          background:'yellow',
          icon: 'error',
          title: 'Email does not match',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        // alert("User Email already registered")
      }
      else{
        console.log("error");
      }
      // if(x==" User Email already registered"){
      //   this._router.navigate([''])
      // }
      
      })
  }

  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:3000/student/login", user)
    //  .subscribe((data) =>{console.log(data)})
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
}
