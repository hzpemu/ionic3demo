import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AppGlobal } from '../../app/AppGlobal';

import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { PersonPage } from '../person/person';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'  
})
export class registerPage {
    //
    //user: User; 


    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    


    abc = null;
    firstid = null;
    username1 = '';
    user = AppGlobal.getInstance().currentUserInfo;
    startindexurl = AppGlobal.getInstance().startindexurl;
    tab4Root: any = PersonPage;


    //constructor(public navCtrl: NavController, public httpRequestService: HttpRequestService) {     
    //}
    constructor(public navCtrl: NavController, public http: Http) {
        
    }

    registerpost(username: string, password: string,verify:string) {

      this.username1 = AppGlobal.getInstance().currentUserInfo.username;
      this.user.username = username;

 
     // username = 2017091905 & password=2017091905 & dd=2017 - 08 - 29 + 09 % 3A03& sex=0 & city=544 & verify=TK8K4
      var array = [];
      //const body = { username: 'Brad', password: 'aaa', dd: '1990-12-19', sex: 1, city: 520, verify: verify };
      const body = { username: username, password: password, dd: '1990-12-19', sex: 1, city: 520, verify: verify };
    //  this.http.post('http://localhost/t323/index.php/home/register/reg_user.html', body, this.headers2).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });


      var str = []; var formbody;
      for (var p in body) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(body[p]));
      }
      formbody= str.join("&");  

 
      this.http.post(this.startindexurl+'/home/register/reg_user.html', formbody, { headers: this.headers }).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });
      //this.http.post('http://localhost/t323/index.php/home/register/reg_user.html', JSON.parse(body), { headers: this.headers }).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });



      for (var a in this.abc) {
          console.log('item=--->' + this.abc[a]);//data[0]  data[1]
          this.firstid = this.abc[a];
      }

  }

 


  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  backaboutpage() {
      this.navCtrl.setRoot(this.tab4Root);
      // this.linklogin = loginPage;
  }
}
