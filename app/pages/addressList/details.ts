import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/addressList/details.html'
})
export class Details {
  private item: any;
  constructor(private params: NavParams) {
    this.item = this.params.data.mengge;//this.params.data.item���Ը�ҳ�洫�����Ķ���
  }
  //ҳ�潫Ҫ����ǰ��do somethings
  ionViewWillEnter(){
    console.log('mengge is so diao')
  }
}
