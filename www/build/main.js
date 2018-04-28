webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__m_loginlog__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_AppGlobal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__person_person__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //, Platform

//import { AppModule } from '../../app/app.module';
//import { HttpRequestService } from '../../app/HttpRequestService';
//import { Headers, Http } from '@angular/http';




//import { NativeStorage } from '@ionic-native/native-storage';

var loginPage = (function () {
    //constructor(public navCtrl: NavController, public httpRequestService: HttpRequestService) {   private nativeStorage: NativeStorage, , public http: Http  private storage: Storage, , private platform: Platform
    //}
    function loginPage(navCtrl, storage, http, sqlite) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.sqlite = sqlite;
        //
        //user: User;
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.abc = null;
        this.firstid = null;
        this.username1 = '';
        this.user = __WEBPACK_IMPORTED_MODULE_3__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo;
        this.startindexurl = __WEBPACK_IMPORTED_MODULE_3__app_AppGlobal__["a" /* AppGlobal */].getInstance().startindexurl;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__person_person__["a" /* PersonPage */];
        this.islogin = null;
        this.logrow = null;
        storage.get('isLogin').then(function (val) {
            console.log('Your isLogin is', val);
            _this.islogin = val;
        });
        // this.nativeStorage.getItem('isLogin').then((val) => {            //
        //     console.log('Your isLogin is', val);
        //   this.islogin = val;
        // });
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
        this.user.headimg = "http://www.china.com/zh_cn/img1311/logo.png";
        this.sqlitelog();
        //  setTimeout(function(){this.initMap();},1000);
        //  });
    }
    loginPage.prototype.login = function (username, password) {
        // let user = new User(0,username, '', 0, '');
        this.username1 = __WEBPACK_IMPORTED_MODULE_3__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo.username;
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
        // this.http.get('http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate').subscribe(data => { data.json(), console.log(data.json()),this.abc = data.json() });
        //this.firstid = array[0]['id'];
        //this.firstid = array[0];
        // try { this.firstid = this.abc[0]['id']; } catch (e) { }
        //this.abc = this.s2.loadarea2();
        console.log('testuser=--->' + this.username1);
        for (var a in this.abc) {
            console.log('item=--->' + this.abc[a]['id']);
            this.firstid = this.abc[a]['id'];
        }
    };
    loginPage.prototype.loginpost = function (username, password, verify) {
        var _this = this;
        this.username1 = __WEBPACK_IMPORTED_MODULE_3__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo.username;
        this.user.username = username;
        // username = 2017091905 & password=2017091905 & dd=2017 - 08 - 29 + 09 % 3A03& sex=0 & city=544 & verify=TK8K4
        var array = [];
        //const body = { username: 'Brad', password: 'aaa', dd: '1990-12-19', sex: 1, city: 520, verify: verify };
        var body = { username: username, password: password, verify: verify };
        console.log('loginpost1');
        var str = [];
        var formbody;
        for (var p in body) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(body[p]));
        }
        formbody = str.join("&");
        this.http.post(this.startindexurl + '/home/login/loginajax.html', formbody, { headers: this.headers }).then(function (data) { data.data().json(), console.log(data.data().json()), _this.abc = data.data().json(); });
        //  this.http.post(this.startindexurl + '/home/login/loginajax.html', formbody, { headers: this.headers }).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });
        console.log('loginpost2');
        for (var a in this.abc) {
            console.log('item=--->' + this.abc[a]); //data[0]  data[1]
            this.firstid = this.abc[a];
        }
        if (this.abc[0] == 1) {
            this.storage.set('isLogin', this.abc[0]); //this.islogin = this.abc[0];
            this.storage.get('isLogin').then(function (val) {
                console.log('Your isLogin is', val);
                _this.islogin = val;
            });
            //this.nativeStorage.setItem('isLogin', this.abc[0]); //this.islogin = this.abc[0];
            // this.nativeStorage.getItem('isLogin').then((val) => {
            //        console.log('Your isLogin is', val);
            //      this.islogin = val;
            //  });
            // this.sqlite.
        }
        console.log('loginpost3');
        console.log('loginpost4');
    };
    loginPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    loginPage.prototype.logincheck = function () {
        // this.linklogin = loginPage;
    };
    loginPage.prototype.backaboutpage = function () {
        this.navCtrl.setRoot(this.tab4Root);
        // this.linklogin = loginPage;
    };
    loginPage.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return Object.assign({ key: key }, value[key]); });
    };
    loginPage.prototype.sqlitelog = function () {
        var _this = this;
        console.log('print sqlitelog1');
        // this.platform.ready().then(() => {
        this.sqlite = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */]();
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
        }).then(function (db) {
            db.executeSql("create table IF NOT EXISTS t_log(id INTEGER PRIMARY KEY AUTOINCREMENT,log TEXT,time DATETIME)", []) //建表
                .then(function () { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql("insert into t_log (log,time) values('123',datetime('now'))", {}); //插入数据
            db.executeSql("select * from t_log ORDER by id DESC LIMIT 3", []).then(function (data) {
                _this.logs = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.logs.push({ id: data.rows.item(i).id, log: data.rows.item(i).log, time: data.rows.item(i).time });
                    }
                    //ok but not detial
                    /*
                                  data
1>{{ log}}  <br />     output:[object,object]
10>{{ log[0]}}<br />   output:
11>{{ log[1]}} <br />   output:
12>{{ log[2]}} <br />   output:
1json>{{log | json}} <br />   output:{"id":33,"log":"123","time","2017-12-09 06:45:12"}
                    */
                    _this.logrow = data.rows.length;
                }
                _this.logs2 = [];
                for (var i = 0; i < data.rows.length; i++) {
                    var temp = { id: data.rows.item(i).id, log: data.rows.item(i).log, time: data.rows.item(i).time };
                    _this.logs2.push(JSON.stringify(temp));
                    /*
data
2>{{ log2}}  <br />   output:{"id":33,"log":"123","time","2017-12-09 06:45:12"}
20>{{ log2[0]}} <br />  output:{
21>{{ log2[1]}} <br />  output:"
22>{{ log2[2]}}  <br />  output:i
                    */
                } //?
                _this.logs3 = [];
                for (var i = 0; i < data.rows.length; i++) {
                    var loginlog1 = new __WEBPACK_IMPORTED_MODULE_0__m_loginlog__["a" /* loginlog */](data.rows.item(i).id, data.rows.item(i).log, data.rows.item(i).time);
                    _this.logs3.push(loginlog1);
                    /*
31>{{ log3}} <br />   output:[object,object]
3id>{{ log3.id}} <br />  output:33
3log>{{ log3.log}} <br />  output:123
3time>{{ log3.time}} <br />  output:2017-12-09 06:45:12
                    */
                } //ok
                _this.logs4 = [];
                for (var i = 0; i < data.rows.length; i++) {
                    // array loginlog4 = id: data.rows.item(i).id,log: data.rows.item(i).log, time: data.rows.item(i).time ;
                    var loginlog4 = [["id", data.rows.item(i).id], ["log", data.rows.item(i).log], ["time", data.rows.item(i).time]];
                    _this.logs4.push(loginlog4);
                    /*
41>{{ log4}} <br />    output:id,33,log,123,time,2017-12-09 06:45:12
4id>{{ log4["id"]}}<br /> output:
4log>{{ log4["log"]}} <br /> output:
4time>{{ log4["time"]}} <br />  output:
                    */
                } //?
                _this.logs5 = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.logs5.push({ id: data.rows.item(i).id, log: data.rows.item(i).log, time: data.rows.item(i).time });
                    } //?                                     
                }
                /*
                           <ion-list>logs5b
<ion-item *ngFor="let log5 of transform(logs5)  ">
 data
 5>{{ log5}}  <br />
 5key>{{ log5.key}}<br />
 5value>{{ log5.value}}  <br />
</ion-item>logs5e
</ion-list>
                */
            }, function (error) {
                console.log("ERROR: " + JSON.stringify(error));
            });
        }).catch(function (e) {
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
        console.log('print sqlitelog2');
    };
    return loginPage;
}());
loginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <h2>Welcome   login</h2>\n\n\n\n    <ion-item>\n\n        <ion-label floating>用戶名username</ion-label>\n\n        <ion-input #box1 (keyup)="0"  type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>密碼password</ion-label>\n\n        <ion-input #box2 (keyup)="0"  type="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>驗證碼verifycode</ion-label>\n\n        <ion-input #box3 (keyup)="0"  type="text"></ion-input>\n\n    </ion-item>   \n\n    <ion-item>\n\n        <img id="verify1" class="decoded" src="{{startindexurl}}/home/index/verify" alt="{{startindexurl}}/home/index/verify" onClick="this.src=this.src+\'?=\'+Math.random()">\n\n        <p>↑看不清請點擊圖片刷新</p>\n\n        <p>↑Please click graphics to refresh when not clear</p>\n\n    </ion-item> \n\n        <div padding>\n\n            <button ion-button full (click)="loginpost(box1.value,box2.value,box3.value)">登錄</button>\n\n            \n\n        </div>\n\n\n\n        <input [(ngModel)]="user.headimg" placeholder="headimg">\n\n        <img src="{{user.headimg}}">\n\n        <p>box1.value->{{box1.value}}</p>\n\n        <p>box2.value->{{box2.value}}</p>\n\n        <p>user.username->{{user.username}}</p>\n\n        <p>username1->{{username1}}</p>\n\n        <p>abc->{{abc}}</p>\n\n        <p>firstid->{{firstid}}</p>\n\n        <p>storageisLogin->{{islogin}}</p>\n\n        <p>logrow->{{logrow}}</p>\n\n\n\n         <ion-list>ddb\n\n          <ion-item *ngFor="let log of logs">\n\n              data\n\n              1>{{ log}}  <br />\n\n              10>{{ log[0]}}--{{log[\'id\']}}<br />\n\n              11>{{ log[1]}}--{{log[\'log\']}} <br />\n\n              12>{{ log[2]}}--{{log[\'time\']}} <br />\n\n              1json>{{log[0] | json}} <br /> \n\n              1json>{{log[1] | json}} <br /> \n\n              1json>{{log[2] | json}} <br />  \n\n              1json>{{log[\'id\'] | json}} <br /> \n\n              1json>{{log[\'log\'] | json}} <br /> \n\n              1json>{{log[\'time\'] | json}} <br />               \n\n        </ion-item>dde\n\n          </ion-list>\n\n\n\n          <ion-list>logs2b\n\n            <ion-item *ngFor="let log2 of logs2  ">\n\n                data\n\n                2>{{ log2}}  <br />\n\n                20>{{ log2[0]}} <br />\n\n                21>{{ log2[1]}} <br />\n\n                22>{{ log2[2]}}  <br />  \n\n                20>{{ log2[\'id\']}} <br />\n\n                21>{{ log2[\'log\']}} <br />\n\n                22>{{ log2[\'time\']}}  <br />         \n\n          </ion-item>logs2e\n\n          </ion-list>\n\n\n\n          <ion-list>logs3b\n\n                <ion-item *ngFor="let log3 of logs3"> \n\n                    data                   \n\n                31json>{{ log3| json}} <br /> \n\n                31>{{ log3}} <br />\n\n                3id>{{ log3.id}} <br />\n\n                3log>{{ log3.log}} <br />\n\n                3time>{{ log3.time}} <br />           \n\n              </ion-item>logs3e\n\n           </ion-list>  \n\n           <ion-list>logs4b\n\n                <ion-item *ngFor="let log4 of logs4"> \n\n                    data                   \n\n                41>{{ log4}} <br /> \n\n                4id>{{ log4["id"]}}<br />\n\n                4log>{{ log4["log"]}} <br />\n\n                4time>{{ log4["time"]}} <br />   \n\n                4idjson>{{ log4["id"]| json}}<br />\n\n                4logjson>{{ log4["log"| json]}} <br />\n\n                4timejson>{{ log4["time"| json]}} <br /> \n\n                4id[]>{{ log4[0]}}<br />\n\n                4log[]>{{ log4[1]}} <br />\n\n                4time[]>{{ log4[2]}} <br />         \n\n              </ion-item>logs4e\n\n           </ion-list>\n\n\n\n\n\n        <button ion-item (click)="backaboutpage()">\n\n            <ion-icon name="return-left" item-left></ion-icon>\n\n            Return返回\n\n        </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */]])
], loginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!3</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_person__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__person_person__["a" /* PersonPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="person" tabIcon="person"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//加入新的页面必须注意tabs页面文件，和app.module.ts
var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo;
        this.linklogin = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* loginPage */];
    }
    AboutPage.prototype.onLink = function (url) {
        window.open(url);
        //onLink('http://go.microsoft.com/fwlink/?LinkID=820516')
    };
    AboutPage.prototype.gologin = function () {
        this.navCtrl.setRoot(this.linklogin);
        // this.linklogin = loginPage;
    };
    AboutPage.prototype.changeuserid = function () {
        if (this.user.userid > 0) {
            this.user.userid = 0;
            this.colorc = "danger";
        }
        else {
            this.user.userid = Math.random() * 10;
            this.colorc = "light";
        }
        // this.linklogin = loginPage;
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About3\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p>user.username->{{user.username}}</p>\n    <p>user.userid->{{user.userid}}</p>\n    <img src="{{user.headimg}}">\n\n  <ion-list>\n    <ion-list-header>支持我们做得更好可以扫码捐赠</ion-list-header>\n    <ion-item>\n            \n        <img src="assets/imgs/alipaymini.png"/>\n        <span class="fa fa-google-wallet" item-left></span>\n        <button ion-item (click)="changeuserid()">\n            <ion-icon name="log-in" color="{{colorc}}" item-left></ion-icon>\n            \n            changeuserid\n        </button>\n        <div *ngIf="!user.userid">\n            !user.userid\n        </div>\n        <div *ngIf="user.userid">\n            user.userid\n        </div>\n        <span [ngSwitch]="user.userid">\n            <span *ngSwitchCase="0">张三</span>\n            <span *ngSwitchCase="">张二</span>\n            <span *ngSwitchDefault>龙大</span>\n        </span>\n        <button ion-item (click)="gologin()">\n            <ion-icon class="fa fa-eject" item-left color="{{colorc}}" ></ion-icon>\n           \n            log-out\n        </button>\n        <button ion-item (click)="gologin()">\n            <div class="fa fa-eject" ></div>\n\n            log-out1\n        </button>\n        <button ion-item (click)="gologin()">\n            <span class="fa fa-google-wallet"></span>\n\n            log-out2\n        </button>\n    \n        <button ion-item (click)="gologin()">\n            <ion-icon name="color-wand" item-left></ion-icon>\n            register\n        </button>\n    </ion-item>\n        <ion-item>\n            <ion-icon name="ionic" item-left></ion-icon>\n            rrg\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="cafe" item-left></ion-icon>\n            @VSCordovaTools\n        </ion-item>\n    <ion-item>\n        <ion-icon name="heart" item-left></ion-icon>\n        heart\n    </ion-item>\n    <ion-item>\n        <ion-icon name="apps" item-left></ion-icon>\n        个人信息\n    </ion-item>\n    <ion-item>\n        <ion-icon name="construct" item-left></ion-icon>\n        设置\n    </ion-item>\n    <ion-item>\n        <ion-icon name="done-all" item-left></ion-icon>\n        done-all同好\n    </ion-item>\n    <ion-item>\n        <ion-icon name="briefcase" item-left></ion-icon>\n        briefcasejob\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__person_person__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var registerPage = (function () {
    //constructor(public navCtrl: NavController, public httpRequestService: HttpRequestService) {     
    //}
    function registerPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        //
        //user: User; 
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.abc = null;
        this.firstid = null;
        this.username1 = '';
        this.user = __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo;
        this.startindexurl = __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__["a" /* AppGlobal */].getInstance().startindexurl;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__person_person__["a" /* PersonPage */];
    }
    registerPage.prototype.registerpost = function (username, password, verify) {
        var _this = this;
        this.username1 = __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo.username;
        this.user.username = username;
        // username = 2017091905 & password=2017091905 & dd=2017 - 08 - 29 + 09 % 3A03& sex=0 & city=544 & verify=TK8K4
        var array = [];
        //const body = { username: 'Brad', password: 'aaa', dd: '1990-12-19', sex: 1, city: 520, verify: verify };
        var body = { username: username, password: password, dd: '1990-12-19', sex: 1, city: 520, verify: verify };
        //  this.http.post('http://localhost/t323/index.php/home/register/reg_user.html', body, this.headers2).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });
        var str = [];
        var formbody;
        for (var p in body) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(body[p]));
        }
        formbody = str.join("&");
        this.http.post(this.startindexurl + '/home/register/reg_user.html', formbody, { headers: this.headers }).subscribe(function (data) { data.json(), console.log(data.json()), _this.abc = data.json(); });
        //this.http.post('http://localhost/t323/index.php/home/register/reg_user.html', JSON.parse(body), { headers: this.headers }).subscribe(data => { data.json(), console.log(data.json()), this.abc = data.json() });
        for (var a in this.abc) {
            console.log('item=--->' + this.abc[a]); //data[0]  data[1]
            this.firstid = this.abc[a];
        }
    };
    registerPage.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    registerPage.prototype.backaboutpage = function () {
        this.navCtrl.setRoot(this.tab4Root);
        // this.linklogin = loginPage;
    };
    return registerPage;
}());
registerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n        register\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <h2>Welcome   regiter</h2>\n\n\n\n    <ion-item>\n\n        <ion-label floating>用戶名username</ion-label>\n\n        <ion-input #box1 (keyup)="0"  type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>密碼password</ion-label>\n\n        <ion-input #box2 (keyup)="0"  type="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>驗證碼verifycode</ion-label>\n\n        <ion-input #box3 (keyup)="0"  type="text"></ion-input>\n\n    </ion-item>   \n\n    <ion-item>\n\n        <img id="verify1" class="decoded" src="{{startindexurl}}/home/index/verify" alt="{{startindexurl}}/home/index/verify" onClick="this.src=this.src+\'?=\'+Math.random()">\n\n        <p>↑看不清請點擊圖片刷新</p>\n\n        <p>↑Please click graphics to refresh when not clear</p>\n\n    </ion-item> \n\n        <div padding>\n\n            \n\n            <button ion-button full (click)="registerpost(box1.value,box2.value,box3.value)">注册</button>\n\n        </div>\n\n\n\n        <input [(ngModel)]="user.headimg" placeholder="headimg">\n\n        <img src="{{user.headimg}}">\n\n        <p>box1.value->{{box1.value}}</p>\n\n        <p>box2.value->{{box2.value}}</p>\n\n        <p>user.username->{{user.username}}</p>\n\n        <p>username1->{{username1}}</p>\n\n        <p>abc->{{abc}}</p>\n\n        <p>firstid->{{firstid}}</p>\n\n        <button ion-item (click)="backaboutpage()">\n\n            <ion-icon name="return-left" item-left></ion-icon>\n\n            Return返回\n\n        </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], registerPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on hzpemu20171206</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_person_person__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { Http } from '@angular/http';







//import { Storage } from '@ionic/storage';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_person_person__["a" /* PersonPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* loginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* registerPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_person_person__["a" /* PersonPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* loginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* registerPage */]
        ],
        providers: [
            //Storage,
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userid, username, birthday, sex, headimg, PHPSESSID, id, checkkey) {
        this.userid = userid;
        this.username = username;
        this.birthday = birthday;
        this.sex = sex;
        this.headimg = headimg;
        this.PHPSESSID = PHPSESSID;
        this.id = id;
        this.checkkey = checkkey;
        //let Use = new User(null, null, null, null, null);
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginlog; });
var loginlog = (function () {
    function loginlog(id, log, time) {
        this.id = id;
        this.log = log;
        this.time = time;
        //let Use = new User(null, null, null, null, null);
    }
    return loginlog;
}());

//# sourceMappingURL=loginlog.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGlobal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__m_user__ = __webpack_require__(273);

/**
 * AppGlobal 全局定义 单例模式
 */
var AppGlobal = (function () {
    function AppGlobal() {
        /**是否是调试状态 */
        this.isDebug = true;
        this.server = this.isDebug ? "http://localhost" : "http://www.xxx.com";
        this.apiUrl = "/MobileApi/api";
        this.upapiUrl = "/t323";
        this.indexUrl = "/index.php";
        this.starturl = this.server + this.upapiUrl;
        this.startindexurl = this.server + this.upapiUrl + this.indexUrl;
        /**当前用户信息 */
        this.currentUserInfo = new __WEBPACK_IMPORTED_MODULE_0__m_user__["a" /* User */](null, 'no user info', null, null, null, null, null, null);
        //user = new User(null, null, null, null, null);//方式一初始化user
        //user = new User(0, '', '', 0, '');//方式一初始化user
        //user: User = {
        //    userid: 0,
        //    username: 'Windstorm',
        //    birthday: '',
        //    sex: 0,
        //    headimg: ''
        //};//方式二初始化user
        /**分页页数 */
        this.pageSize = 10;
        if (AppGlobal.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        AppGlobal.instance = this;
    }
    /**
     * 获取当前实例
     *
     * @static
     * @returns {AppGlobal}
     */
    AppGlobal.getInstance = function () {
        return AppGlobal.instance;
    };
    return AppGlobal;
}());

AppGlobal.instance = new AppGlobal();
//# sourceMappingURL=AppGlobal.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonPage = (function () {
    function PersonPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2__app_AppGlobal__["a" /* AppGlobal */].getInstance().currentUserInfo;
        this.linklogin = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* loginPage */];
    }
    PersonPage.prototype.onLink = function (url) {
        window.open(url);
        //onLink('http://go.microsoft.com/fwlink/?LinkID=820516')
    };
    PersonPage.prototype.gologin = function () {
        this.navCtrl.setRoot(this.linklogin);
        //setTimeout(function(){this.initMap();},1000);
        // setTimeout(function(){that.initMap();},200);
        // this.linklogin = loginPage;
    };
    PersonPage.prototype.gologout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        //   this.navCtrl.setRoot(this.linklogin);
        // this.linklogin = loginPage;
    };
    PersonPage.prototype.goregister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* registerPage */]);
        // this.linklogin = loginPage;
    };
    return PersonPage;
}());
PersonPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-person',template:/*ion-inline-start:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\person\person.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Person \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <h2>Ionic 3 in Visual Studio</h2>\n\n    <p>\n\n        This starter project comes with simple tabs-based layout for apps\n\n        that are going to primarily use a Tabbed UI.\n\n    </p>\n\n    <p>\n\n        Take a look at the <code>src/</code> directory to add or change tabs,\n\n        update any existing page or create new pages.\n\n    </p>\n\n    <p>user.username->{{user.username}}</p>\n\n    <p>user.userid->{{user.userid}}</p>\n\n    <img src="{{user.headimg}}">\n\n    <ion-list>\n\n\n\n       <ion-list-header>Please setting person info</ion-list-header>\n\n\n\n        <div [ngSwitch] ="user.userid">\n\n\n\n            <div *ngSwitchCase="!user.userid || user.userid === \'\'? user.userid : \'\' ||user.userid === \'0\'">\n\n                <button ion-item (click)="gologin()">\n\n                    <ion-icon name="log-in" item-left></ion-icon>\n\n                    用户登录login\n\n                </button>\n\n                <button ion-item (click)="goregister()">\n\n                    <ion-icon name="color-wand" item-left></ion-icon>\n\n                    注册新用户register\n\n                </button>\n\n            </div>\n\n            <div *ngSwitchDefault>\n\n                <button ion-item (click)="gologout()">\n\n                    <ion-icon name="log-out" item-left></ion-icon>\n\n                    退出当前用户log-out\n\n                </button>\n\n                <ion-item>\n\n                    <ion-icon name="apps" item-left></ion-icon>\n\n                    个人信息setting person info\n\n                </ion-item>\n\n            </div>\n\n\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-icon name="construct" item-left></ion-icon>\n\n            设置 config app\n\n        </ion-item>\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Visual Studio 2017\ionic3-ts-tabs1dfvsc20171103\ionic2-ts-tabs1dfvsc\src\pages\person\person.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], PersonPage);

//# sourceMappingURL=person.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map