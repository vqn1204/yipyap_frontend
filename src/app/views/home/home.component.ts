import { Component, OnInit } from '@angular/core';
import { YipyapService } from './../../services/yipyap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  posts: any[];
  text: string;

  constructor(private _yipyapService: YipyapService) {
    this._yipyapService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    });
   }

   createPost(event) {
    event.preventDefault();
    var newPost = {
      _creator: '5a13b3c695fcb47ea5c71308', // Need to change this to take current logged in user's ID. Set as this now for testing
      createdAt: Date.now(),
      text: this.text,
      voteCount: 0,
      _comments: []
    }
    this._yipyapService.createPost(newPost)
      .subscribe(post => {
        this.posts.push(post);
        this.text = '';
      });
   }

   deletePost(id) {
     var posts = this.posts;
     this._yipyapService.deletePost(id).subscribe(data => {
         for (var i = 0; i < posts.length; i++) {
           if (posts[i]._id == id) {
             posts.splice(i,1);
           }
         }
     });
   }


  ngOnInit() {
  }

}
