import {Component} from '@angular/core';
import {Home} from '../home/home';
import {AddressList} from '../addressList/addressList';
import {FriendCircle} from '../friendCircle/friendCircle';
import {UserCenter} from '../userCenter/userCenter';

import {Tabs} from 'ionic-angular';
import {Injectable, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Home;
    this.tab2Root = AddressList;
    this.tab3Root = FriendCircle;
    this.tab4Root = UserCenter;
  }
  //onPageDidEnter() {
  //  //在进入完成之后，我们动态的选定某一个 tab
  //
  //  // 比如说，用户未登陆，我就选定第三个登陆的 tab，如果已经登陆了
  //  // 那么就选择第一个 tab 加载数据给用户看。
  //
  //  let tabs = this.ionicApp.getComponent("mainTabs");
  //  tabs.select(1);
  //
  //
  //}
  ionViewDidEnter(){
    this.tabRef.select(3)
  }
}
