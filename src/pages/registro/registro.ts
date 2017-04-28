import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Registro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class Registro {
  name:any='';
  rfc:any='';
  lastname:any='';
  lastname2:any='';
  birth:any='';
  RegisterForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,fb:FormBuilder) {
    this.RegisterForm=fb.group({
        name:['Ernesto',[Validators.required]],
        lastname:['Pacheco',[Validators.required]],
        lastname2:['Morelos',[Validators.required]],
        birth:['1994/03/08',[Validators.pattern(/^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/)]],
        rfc:['']
    });
    this.name=this.RegisterForm.controls['name'];
    this.lastname=this.RegisterForm.controls['lastname'];
    this.lastname2=this.RegisterForm.controls['lastname2'];
    this.birth=this.RegisterForm.controls['birth'];
    this.rfc=this.RegisterForm.controls['rfc'];
  }
  updateRFC(ev){
    let vocals:string='AEIOUÁÉÍÓÚ';
    let ln:string=this.lastname.value.toUpperCase();
    let ln2:string=this.lastname2.value.toUpperCase();
    ln=ln.replace(' DE ','');
    ln=ln.replace(' DEL ','');
    ln=ln.replace(' LAS ','');
    ln=ln.replace(' LA ','');
    ln=ln.replace(' LO ','');
    ln=ln.replace(' LOS ','');
    if(ln.startsWith('DE ')||ln.startsWith('DEL ')||ln.startsWith('LAS ')||ln.startsWith('LA ')||ln.startsWith('LO ')||ln.startsWith('LOS ')){
      ln=ln.replace('DE ','');
      ln=ln.replace('DEL ','');
      ln=ln.replace('LAS ','');
      ln=ln.replace('LA ','');
      ln=ln.replace('LO ','');
      ln=ln.replace('LOS ','');
    }
    ln2=ln2.replace(' DE ','');
    ln2=ln2.replace(' DEL ','');
    ln2=ln2.replace(' LAS ','');
    ln2=ln2.replace(' LA ','');
    ln2=ln2.replace(' LO ','');
    ln2=ln2.replace(' LOS ','');
    if(ln2.startsWith('DE ')||ln2.startsWith('DEL ')||ln2.startsWith('LAS ')||ln2.startsWith('LA ')||ln2.startsWith('LO ')||ln2.startsWith('LOS ')){
      ln2=ln2.replace('DE ','');
      ln2=ln2.replace('DEL ','');
      ln2=ln2.replace('LAS ','');
      ln2=ln2.replace('LA ','');
      ln2=ln2.replace('LO ','');
      ln2=ln2.replace('LOS ','');
    }
    let n:string=this.name.value.toUpperCase();
    let b:string[]=this.birth.value.split('/');    
    console.log(ln);
    console.log(ln2);
    console.log(n);
    console.log(b);
    //R1
    if(ln.length>2){
      for(let i=1;i<ln.length;i++){
        if(vocals.includes(ln.charAt(i),0)){
          this.rfc.value=ln.charAt(0)+ln.charAt(i);
        }
      }
      this.rfc.value+=ln2.charAt(0);
      if(n.includes(' ')){
        let names:string[]=n.split(' ');
        let containsJoseMaria:boolean=false;
          for(let i=0;i<names.length;i++){
            if(names[i]!='JOSE'&&names[i]!='MARIA'){
              containsJoseMaria=true;
              this.rfc.value+=names[i][0];
            }
          }
          if(!containsJoseMaria){
            this.rfc.value+=n.charAt(0);    
          }
      }else{
        this.rfc.value+=n.charAt(0);
      }
    }else{
      //R3
      this.rfc.value=ln.charAt(0);
      this.rfc.value+=ln2.charAt(0);
      this.rfc.value+=n.charAt(0)+n.charAt(1);
      
    }
    
    this.rfc.value+=b[0].substr(2,3);
    this.rfc.value+=b[1];
    this.rfc.value+=b[2];
    console.log(this.rfc.value);
  }
  register(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro');
  }

}
