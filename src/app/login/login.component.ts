import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin! : FormGroup;

  constructor(private fb : FormBuilder) {
  }
  ngOnInit(){
  this.formLogin=this.fb.group({
    username : this.fb.control(""),
    password : this.fb.control("")
  })
  }

  handleLogin() {
    console.log(this.formLogin.value)
  }
}
