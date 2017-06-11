import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

import { PersonalMainPage } from "../personal-main/personal-main"; 
import { ConfigPage } from "../config/config";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider, public events: Events) {
    this.getUsers();
  }

//API GET to recieve the customers currently in the database
  getUsers() {
    this.restapiService.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  // openJaneDoe(){
  //   this.navCtrl.push(JohnDoePage);
  // }



  
  //API call for opening a single page is not working. (If this works change this with John Doe page) -->
  
  openContact(user){
    this.id = user;
    //let customerId = user;
    console.log("Button check (customerId is) "+this.id);
    this.navCtrl.push(PersonalMainPage, {
      fuckbag: user
    });
  }

  openConfigPage(){
    console.log("Config button works");
    this.navCtrl.push(ConfigPage);
  }

}
