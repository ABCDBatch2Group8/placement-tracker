import { Component, OnInit } from '@angular/core';
import { AdmnAuthService } from '../admn-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admn-login',
  templateUrl: './admn-login.component.html',
  styleUrls: ['./admn-login.component.css']
})
export class AdmnLoginComponent implements OnInit {

  email!:string
  password!:string

  constructor(private admnauth:AdmnAuthService,private router:Router) { }

  ngOnInit(): void {
  }
loginAdmin(){
  const admin={
    email:this.email,
    password:this.password
  }
  
 this.admnauth.admnlogin(admin)
 .subscribe(data=>{
  if(data as {success:true}){
  
    alert('valid');
    this.router.navigate(['/admn-dashboard'])
  }
  else{
    alert('invalid')
  }
  
 })
 }
}
 

