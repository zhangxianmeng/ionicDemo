import {Component} from '@angular/core';
import { ImagePicker } from 'ionic-native';
import { Register } from '../userCenter/register';
import { Http } from '@angular/http';
import { NavController, Loading, Alert, Toast, Modal, ViewController,Storage, LocalStorage} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/userCenter/login.html'
})
export class Login {
  user: any;
  local:Storage;

  constructor(
      private nav: NavController,
      private http: Http,
      private viewController: ViewController
  ) {
    this.user = {
      name:'',
      password:'',
      headface:'images/4.jpg'
    };
    this.local = new Storage(LocalStorage);
    window.localStorage.clear();
  }
  login(){
    if(this.user.name && this.user.password){
      let loading = Loading.create({
        content:'正在登录...',
        spinner:'dots',
        duration:18000
      });
      this.nav.present(loading);

      this.http.get("http://api.gugujiankong.com/account/Login?email=" + this.user.name + "&password=" + this.user.password)
      .subscribe(data => {
            this.local.set('username',this.user.name);
            this.local.set('state',1);
            loading.dismiss();//登录进度条隐藏
            this.viewController.dismiss(this.user.name)////当前也就是自身进行隐藏并将数据传递给用户中心页面
          },error => {
            let toast = Toast.create({
              message: "登录失败！",
              duration: 2000
            })
            this.nav.present(toast)
          })

    }else{
      if(!this.user.name){
        var toast = Toast.create({
          message: "您输入的用户名格式不正确！",
          duration:2000
        });
      }else{
        var toast = Toast.create({
          message: "您输入的密码格式不正确！",
          duration:2000
        });
      }

      this.nav.present(toast);
    }
  }

  //打开注册窗口
  openRegisterPage(){
    let modal = Modal.create(Register);
    this.nav.present(modal)
  }
}
