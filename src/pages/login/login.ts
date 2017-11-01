import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';//, Platform

import { AppGlobal } from '../../app/AppGlobal';
//import { AppModule } from '../../app/app.module';
//import { HttpRequestService } from '../../app/HttpRequestService';
import { Headers, Http } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { PersonPage } from '../person/person';
import { Storage } from '@ionic/storage';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'  
})
export class loginPage { 
    //
    //user: User;


    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    
    
    //public database: SQLite;
    public logs: Array<Object>;


    abc = null;
    firstid = null;
    username1 = '';
    user = AppGlobal.getInstance().currentUserInfo;
    startindexurl = AppGlobal.getInstance().startindexurl;
    tab4Root: any = PersonPage;
    islogin = null;


    //constructor(public navCtrl: NavController, public httpRequestService: HttpRequestService) {     , private platform: Platform
    //}
    constructor(public navCtrl: NavController, public http: Http, private storage: Storage, private sqlite: SQLite) {
        storage.get('isLogin').then((val) => {            //
            console.log('Your isLogin is', val);
           this.islogin = val;
        });
        
        // this.platform.ready().then(() => {
        this.sqlite = new SQLite();
        //3.0.0
        // this.sqlite.openDatabase({ name: "data.db", location: "default" }).then(() => {
        //        // this.refresh();
        //     this.sqlite.executeSql('create table IF NOT EXISTS t_log(id INTEGER PRIMARY KEY AUTOINCREMENT,log TEXT,time DATETIME)', {})//建表
        //           .then(() => console.log('Executed SQL'))
        //             .catch(e => console.log(e));

        //     this.sqlite.executeSql("insert into t_log (log,time) values('123',datetime('now'))", {});//插入数据
        //     this.sqlite.executeSql("select * from t_log", []).then((data) => {
        //                 this.people = [];
        //                 if (data.rows.length > 0) {
        //                     for (var i = 0; i < data.rows.length; i++) {
        //                         this.people.push({ id: data.rows.item(i).id,log: data.rows.item(i).log, time: data.rows.item(i).time });
        //                    }
        //                }
        //            }, (error) => {
        //                 console.log("ERROR: " + JSON.stringify(error));
        //             });
        //         }, (error) => {
        //             console.log("ERROR: ", error);
        //  });

        //4.3.2

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
             db.executeSql("create table IF NOT EXISTS t_log(id INTEGER PRIMARY KEY AUTOINCREMENT,log TEXT,time DATETIME)", [])//建表
             .then(() => console.log('Executed SQL'))
             .catch(e => console.log(e));
             db.executeSql("insert into t_log (log,time) values('123',datetime('now'))", {});//插入数据
             db.executeSql("select * from t_log", []).then((data) => {
                                 this.logs = [];
                                 if (data.rows.length > 0) {
                                     for (var i = 0; i < data.rows.length; i++) {
                                         this.logs.push({ id: data.rows.item(i).id,log: data.rows.item(i).log, time: data.rows.item(i).time });
                                    }
                                }
                            }, (error) => {
                                 console.log("ERROR: " + JSON.stringify(error));
                             });
             }).catch(e => {
                       // return Promise.resolve(e);
                      // console.log("ERROR: ", e);
                       console.log(e);
                      });

                  //    //let result = this.database.executeSql("select * from t_log", [])
  //    //    .then((data) => {
  //    //        debugger;
  //    //        console.log("select->" + data..rows.item(0).name)
  //    //    })
  //    //    .catch(e => console.log(e));
  //} 
                  //query() {
    //   this.sqlite.create({
    //       name: 'data.db',
    //       location: 'default'
    //   }).then((db: SQLiteObject) => {
    //       return db.executeSql("select * from t_log", []).then(res => {
    //           let logs = [];
    //           for (var i = 0; i < res.rows.length; i++) {
    //               logs.push(res.rows.item(i));
    //           }
    //           return Promise.resolve(logs);
    //       }).catch(e => {
    //           return Promise.resolve(e);
    //       });
    //   }).catch(e => {
    //       return Promise.resolve(e);
    //   });

    //                public add() {
    //                this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
    //                    console.log("INSERTED: " + JSON.stringify(data));
    //                }, (error) => {
    //                    console.log("ERROR: " + JSON.stringify(error.err));
    //                });
    //            }

    //public refresh() {
    //                this.database.executeSql("SELECT * FROM people", []).then((data) => {
    //                    this.people = [];
    //                    if (data.rows.length > 0) {
    //                        for (var i = 0; i < data.rows.length; i++) {
    //                            this.people.push({ firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname });
    //                        }
    //                    }
    //                }, (error) => {
    //                    console.log("ERROR: " + JSON.stringify(error));
    //                });
    //            }

         //       <ion-header >
         //           <ion-navbar >
         //           <ion-title >
         //           Ionic Blank
         //               < /ion-title>
         //               < ion - buttons start>
         //                   <button (click)="refresh()" > Refresh < /button>
         //                       < /ion-buttons>
         //                       < ion - buttons end>
         //                           <button (click)="add()" > Add < /button>
         //                               < /ion-buttons>
         //                               < /ion-navbar>
         //                               < /ion-header>

         //                               < ion - content padding>
         //                                   <ion-list >
         //                                   <ion-item * ngFor="let person of people" >
         //                                       {{person.firstname }
         //   } {{person.lastname }}
         //</ion-item>
         //   < /ion-list>
         //   < /ion-content>


      //  });
    }
  login(username: string, password: string) {
      // let user = new User(0,username, '', 0, '');
      this.username1 = AppGlobal.getInstance().currentUserInfo.username;
      this.user.username = username;
     // this.abc = this.httpRequestService.loadarea1();
      //this.user.password = password;

      //this.abc = this.http.get(' ../../assets/data/data.json')
      //    .toPromise()
      //    .then(response => response.json().data)
      //    .catch(this.handleError);
      var array = [];
      //for (var item in this.abc) {
      //    array.push(json.stringify(item));
      //}

      //this.http.get('http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate=').subscribe(data => {
          // Read the result field from the JSON response.
      //    this.abc = data['id'];
      //});

      this.http.get('http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate').subscribe(data => { data.json(), console.log(data.json()),this.abc = data.json() });
     
      //this.firstid = array[0]['id'];
      //this.firstid = array[0];
     // try { this.firstid = this.abc[0]['id']; } catch (e) { }
      
      //this.abc = this.s2.loadarea2();
      console.log('testuser=--->' + this.username1);
      for (var a in this.abc) {
          console.log('item=--->' + this.abc[a]['id']);
          this.firstid = this.abc[a]['id'];
      }

    }


  loginpost(username: string, password: string, verify: string) {

      this.username1 = AppGlobal.getInstance().currentUserInfo.username;
      this.user.username = username;


      // username = 2017091905 & password=2017091905 & dd=2017 - 08 - 29 + 09 % 3A03& sex=0 & city=544 & verify=TK8K4
      var array = [];
      //const body = { username: 'Brad', password: 'aaa', dd: '1990-12-19', sex: 1, city: 520, verify: verify };
      const body = { username: username, password: password, verify: verify };


      var str = []; var formbody;
      for (var p in body) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(body[p]));
      }
      formbody = str.join("&");


      this.http.post(this.startindexurl + '/home/login/loginajax.html', formbody, { headers: this.headers }).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });



      for (var a in this.abc) {
          console.log('item=--->' + this.abc[a]);//data[0]  data[1]
          this.firstid = this.abc[a];
      }
      if (this.abc[0]==1) {
          this.storage.set('isLogin', this.abc[0]); //this.islogin = this.abc[0];
          this.storage.get('isLogin').then((val) => {
               console.log('Your isLogin is', val);
              this.islogin = val;
          });
          // this.sqlite.
    

      }



  }


  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
  logincheck() {
     
      // this.linklogin = loginPage;
  }
  backaboutpage() {
      this.navCtrl.setRoot(this.tab4Root);
      // this.linklogin = loginPage;
  }
}
