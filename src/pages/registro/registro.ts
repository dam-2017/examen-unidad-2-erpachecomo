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
  rfcvalue:string='';
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
    let badWords:string[]=['DE','DEL', 'DE LAS', 'DE LOS','DA', 'DE','D','DES', 'DU','VON','VAN', 'VANDEN', 'Y','VANDER'];
    let ln:string=this.lastname.value.toUpperCase();
    let ln2:string=this.lastname2.value.toUpperCase();
    for(let i=0;i<badWords.length;i++){
      ln=ln.replace(' '+badWords[i]+' ','');
      if(ln.startsWith(badWords[i]+' ')){
        ln=ln.replace(badWords[i]+' ','');  
      }
      ln2=ln2.replace(' '+badWords[i]+' ','');
      if(ln2.startsWith(badWords[i]+' ')){
        ln2=ln2.replace(badWords[i]+' ','');  
      }
    }
    let n:string=this.name.value.toUpperCase();
    let b:string[]=this.birth.value.split('/');    
    console.log(ln);
    console.log(ln2);
    console.log(n);
    console.log(b);
    //R1
    if(ln.length>2){
      this.rfcvalue=ln.charAt(0)+ln.charAt(1);
      for(let i=1;i<ln.length;i++){
        if(vocals.includes(ln.charAt(i),0)){
          this.rfcvalue=ln.charAt(0)+ln.charAt(i);
          i=ln.length;
        }
      }
      this.rfcvalue+=ln2.charAt(0);
      if(n.includes(' ')){
        let names:string[]=n.split(' ');
        let containsJoseMaria:boolean=false;
          for(let i=0;i<names.length;i++){
            if(names[i]==='JOSE'||names[i]==='MARIA'){
              containsJoseMaria=true;
              this.rfcvalue+=names[i][0];
            }
          }
          if(!containsJoseMaria){
            this.rfcvalue+=n.charAt(0);    
          }
      }else{
        this.rfcvalue+=n.charAt(0);
      }
    }else{
      //R3
      this.rfcvalue=ln.charAt(0);
      this.rfcvalue+=ln2.charAt(0);
      this.rfcvalue+=n.charAt(0)+n.charAt(1);
      
    }
    
    this.rfcvalue+=b[0].substr(2,3);
    this.rfcvalue+=b[1];
    this.rfcvalue+=b[2];
    this.rfcvalue=this.rfcvalue.replace('PUTO','PUTX');
    this.rfcvalue=this.rfcvalue.replace('PENE','PENX');
    console.log(this.rfcvalue);
  }
  register(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro');
  }

}
