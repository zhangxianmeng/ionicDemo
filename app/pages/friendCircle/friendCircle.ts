import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/friendCircle/friendCircle.html'
})
export class FriendCircle {
  private count: any;
  constructor(private navController: NavController) {
    this.count = 1111;
  }

  addAgree(){
    this.count++;
  }
  saySomethings(){
    //do somethings
  }
}
