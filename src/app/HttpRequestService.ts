import { Injectable } from '@angular/core';

import { Headers,Http } from '@angular/http';


//import { AppGlobal } from './AppGlobal';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';


//@Injectable()
export class HttpRequestService {
   // private static instance: HttpRequestService = new HttpRequestService(http);
   // http: Http;  
   // data: any;
    data = null;
   // user= AppGlobal.getInstance().currentUserInfo;
    constructor(public http: Http) { }

    load(): any {
        if (this.data) {
            return Observable.of(this.data);
        } else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    }
    processData(data: any) {
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        //http://www.sf-express.com/sf-service-owf-web/service/region/A440700000/subRegions?level=1&lang=sc&region=cn&translate=
        //http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate=
        //http://www.sf-express.com/sf-service-owf-web/service/region/A440700000/subRegions?level=1&lang=sc&region=cn&translate=
        this.data = data.json();

        this.data.tracks = [];
        return this.data;
    }

    public loadarea(): any {
        if (this.data) {
            return Observable.of(this.data);
        } else {
            return this.http.get('http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate=')
                .map(this.processData, this);
        }
    }
    public loadarea1(): any {
        //if (this.data) {
        //    return Observable.of(this.data);
        //} else {
            return this.http.get('http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate=')
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
       // }
    }
    public loadarea2(): any {
        //if (this.data) {
        //    return Observable.of(this.data);
        //} else {
        return this.http.get('http://www.sf-express.com/sf-service-owf-web/service/region/A000086000/subRegions?level=-1&lang=sc&region=cn&translate=')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
        // }
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}