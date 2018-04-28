import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppGlobal } from '../../app/AppGlobal';
import { loginPage } from '../login/login';
import { registerPage } from '../register/register';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
}
)

export class PersonPage {
   
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
      //setTimeout(function(){this.initMap();},1000);
     // setTimeout(function(){that.initMap();},200);
     // this.linklogin = loginPage;
  }
  gologout() {
    this.navCtrl.setRoot(HomePage);
    
   //   this.navCtrl.setRoot(this.linklogin);
      // this.linklogin = loginPage;
  }
  goregister() {
      this.navCtrl.setRoot(registerPage);
      // this.linklogin = loginPage;

  }
}
