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

  ionViewDidEnter(){
    this.tabRef.select(0);
  }
}
