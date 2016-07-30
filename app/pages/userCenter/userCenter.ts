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
  username:any;//用户是否登录
  constructor(
      private nav: NavController
      //private imagePicker:ImagePicker
  ) {
    this.user = {
      name:'',
      password:'',
      headface:'images/4.jpg'
    };
    this.local = new Storage(LocalStorage);
    //localStorage取值问题
    this.local.get('username').then( (res) =>{
    
        if( res ){
          this.user.headface = "images/" + res + ".jpg";
        }else{
          let modal = Modal.create(Login)
          modal.onDismiss(data => {
            console.log(data)
            this.user.headface = "images/" + data + ".jpg";
          })
          this.nav.present(modal)
        }
    })
  }
  uploadImage(){
    //let options = {
    //  //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
    //  quality: 100,                                            //相片质量0-100
    //  destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
    //  sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
    //  allowEdit: false,                                        //在选择之前允许修改截图
    //  encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
    //  targetWidth: 200,                                        //照片宽度
    //  targetHeight: 200,                                       //照片高度
    //  mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
    //  cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
    //  saveToPhotoAlbum: true                                   //保存进手机相册
    //};
    //this.imagePicker.getPictures(options).then((results) => {
    //  for (var i = 0; i < results.length; i++) {
    //    console.log('Image URI: ' + results[i]);
    //    this.user.headface = results[i];
    //    //将图片上传到服务器，调用 API
    //  }
    //}, (err) => { });
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
