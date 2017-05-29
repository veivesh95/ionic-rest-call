import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalMainPage } from './personal-main';

@NgModule({
  declarations: [
    PersonalMainPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalMainPage),
  ],
  exports: [
    PersonalMainPage
  ]
})
export class PersonalMainPageModule {}
