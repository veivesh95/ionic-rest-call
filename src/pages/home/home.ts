import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

import { PersonalMainPage } from "../personal-main/personal-main";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider) {
    this.getUsers();
  }

  getUsers() {
    this.restapiService.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  openContact(){
    console.log("Button check");
    this.navCtrl.push(PersonalMainPage);
  }

}
