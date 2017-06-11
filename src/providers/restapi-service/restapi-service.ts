import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestapiServiceProvider {

  data: any;
  customerId: number;
  

  apiUrl = 'http://mfin-api-167306.appspot.com';

  constructor(public http: Http) {
    console.log('Rest ApI is called');
  }

//get data by GET!
  getUsers() {
    if (this.data) {
     return Promise.resolve(this.data);
    }
    
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/getCustomers')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  //save data by post (i guess)
  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/getCustomers', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //get exact one customer detail from the json objects
  getSingleUser(cusId){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/getCustomer/'+cusId)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

}

