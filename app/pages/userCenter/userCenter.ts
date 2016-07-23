import {Component} from '@angular/core';
import { ImagePicker } from 'ionic-native';
import { Login } from '../UserCenter/login';
import { Http } from '@angular/http';
import { NavController, Loading, Alert, Toast, Modal, ViewController,Storage, LocalStorage} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/userCenter/userCenter.html'
})

export class UserCenter {
  user: any;
  local:Storage;
  constructor(
      private nav: NavController
  ) {
    this.user = {
      name:'',
      password:'',
      headface:'images/4.jpg'
    };
    this.local = new Storage(LocalStorage);
    window.localStorage.clear();

    //localStorage取值问题
    if( 0 ){
      //this.user.headface = "images/" + window.localStorage.username+ ".jpg";
    }else{
      let modal = Modal.create(Login)
      modal.onDismiss(data => {
        this.user.headface = "images/" + data + ".jpg";
      })
      this.nav.present(modal)
    }
  }
  ionViewWillEnter(){

  }
  logout(){
    window.localStorage.clear();
    let modal = Modal.create(Login);
    modal.onDismiss(data => {
      this.user.headface = "images/" + data + ".jpg";
    });
    this.nav.present(modal);
  }
}
