import { Registro } from './../registro/registro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Bienvenida page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class Bienvenida {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToRegister(){
    this.navCtrl.push(Registro);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenida');
  }

}
