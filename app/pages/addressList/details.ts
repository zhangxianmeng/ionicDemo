import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/addressList/details.html'
})
export class Details {
  private item: any;
  constructor(private params: NavParams) {
    this.item = this.params.data.mengge;//this.params.data.item来自父页面传过来的对象
  }
  //页面将要进入前，do somethings
  ionViewWillEnter(){
    console.log('mengge is so diao')
  }
}
