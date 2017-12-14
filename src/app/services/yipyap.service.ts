import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YipyapService {

  constructor(private http: Http) {
   }

  getPosts() {
    return this.http.get('http://localhost:3000/api/allposts')
      .map(res => res.json());
  }
  
  createPost(newPost) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/newpost', JSON.stringify(newPost), {headers: headers})
      .map(res => res.json());
  }

  deletePost(id) {
    return this.http.delete('http://localhost:3000/api/post/' + id + '/delete')
      .map(res => res.json());
  }

}
