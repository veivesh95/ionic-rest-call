import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';


@IonicPage()
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  mobileNumber: number;
  textMessage: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private toastCtrl: ToastController, private smsCtrl: SMS) {
    this.mobileNumber = Number(navParams.get('phoneNumber'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingPage');
  }

  async sendTextMessage(){
    try{
      await this.smsCtrl.send(String(this.mobileNumber), this.textMessage);
      const toastCtrl = this.toastCtrl.create({
        message: 'Text has been sent!',
        duration: 2000
      });
      toastCtrl.present();
    }
      catch (excep){
        const toastCtrl = this.toastCtrl.create({
          message: 'Text was not sent',
          //duration: 2000,
          showCloseButton: true,
          closeButtonText: "OK"
        });
        toastCtrl.present();
      }
    }

    closeModal(){
      this.viewCtrl.dismiss();
    }


  }

