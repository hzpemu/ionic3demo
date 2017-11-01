import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppGlobal } from '../../app/AppGlobal';
import { loginPage } from '../login/login';
import { fontawesome } from 'font-awesome';
//加入新的页面必须注意tabs页面文件，和app.module.ts
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  colorc;
  user = AppGlobal.getInstance().currentUserInfo;
  linklogin: any = loginPage;
  constructor(public navCtrl: NavController) {

  }
  onLink(url: string) {
    window.open(url);
    //onLink('http://go.microsoft.com/fwlink/?LinkID=820516')
 }
 gologin() {
    this.navCtrl.setRoot(this.linklogin);
   // this.linklogin = loginPage;
 }
 changeuserid() {
    if (this.user.userid > 0) { this.user.userid = 0; this.colorc = "danger";}
    else { this.user.userid = Math.random() * 10; this.colorc = "light"; }
   
    // this.linklogin = loginPage;
 }
}
