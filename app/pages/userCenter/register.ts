import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/userCenter/register.html'
})
export class Register {
  constructor(public viewController: ViewController){}
  dismiss(){
    this.viewController.dismiss();

  }
}
