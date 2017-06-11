import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular'
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { MessagingPage } from "../messaging/messaging";
import { CallNumber } from "@ionic-native/call-number";

@IonicPage()
@Component({
  selector: 'page-personal-main',
  templateUrl: 'personal-main.html',
})

export class PersonalMainPage {

  // private customerID
  theGuy: any;
  mobileNo: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public service:RestapiServiceProvider, public modalCtrl: ModalController, private callCtrl: CallNumber) {
    // this.getUser();
    this.theGuy = navParams.get('fuckbag');
    this.mobileNo = Number(this.theGuy.phone)
  }

  user:any;
  idOnPersonalPage: number;
  

  // this.idOnPersonalPage = this.navParams.get('this.id');
  // idNum = this.navParams;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalMainPage');
  }

  openMessage(getNumber){
    let modal = this.modalCtrl.create(MessagingPage, {
      phoneNumber: getNumber
    });
    modal.present();

    console.log("passed param: "+getNumber);
    // this.navCtrl.push(MessagingPage, {
    //   phoneNumber: getNumber
    // });
  }

  // testButton(){
  //   console.log(String(this.mobileNo));
  // }

  async callNumber():Promise<any>{
    try{
      await this.callCtrl.callNumber(String(this.mobileNo),true);
    }
    catch (excep){
      console.error(excep);
    }
  }

  // getUser() {
  //   this.service.getSingleUser(this.navParams)
  //   .then(data => {
  //     this.user = data;
  //     console.log(this.user);
  //   });
  // }

  // getData(){
  //   let data = {
  //     name: "Avenash",
  //     surname: "Krish",
  //     cid: "31"
  //   };

  //   this.events.publish('customer:view', data);
  // }




}
