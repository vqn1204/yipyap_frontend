import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YipyapService {

  constructor(private http: Http) {
    console.log('YipYap Service Working...');
   }

  getPosts() {
    return this.http.get('http://localhost:3000/api/allposts')
      .map(res => res.json());
  }

}
