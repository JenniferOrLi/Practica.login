import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    usuario:'',
    pass:''
  }
  constructor(private LoginServ:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.user.usuario !=""){
      console.log(this.LoginServ.login(this.user));
    }
  }
}



  

