import { Bienvenida } from './../bienvenida/bienvenida';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any='';
  password:any='';
  wrongData:boolean=false;
  LoginForm:FormGroup;
  constructor(public navCtrl: NavController,fb:FormBuilder) {
    this.LoginForm=fb.group({
      user:['erpachecomo',[Validators.required,Validators.minLength(6),Validators.pattern(/^[a-z]+$/)]],
      password:['12400306@ittepic',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[|@#%&])$/)]]
    });
    this.user=this.LoginForm.controls['user'];
    this.password=this.LoginForm.controls['password'];
  }

  login(){
    this.wrongData=(this.user.value!='erpachecomo'||this.password.value!='12400306@ittepic');
    if(this.wrongData)
      return;
      this.navCtrl.push(Bienvenida);
  }

}
