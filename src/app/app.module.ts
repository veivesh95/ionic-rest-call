import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { SMS } from "@ionic-native/sms";
import { CallNumber } from "@ionic-native/call-number";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonalMainPage } from "../pages/personal-main/personal-main";
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';
import { ConfigPage } from "../pages/config/config";
import { MessagingPage } from "../pages/messaging/messaging";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonalMainPage,
    ConfigPage,
    MessagingPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonalMainPage,
    ConfigPage,
    MessagingPage   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestapiServiceProvider,
    SMS,
    CallNumber
  ]
})
export class AppModule {}
