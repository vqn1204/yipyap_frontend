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

  constructor(private _yipyapService: YipyapService) {
    this._yipyapService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    });
   }

  ngOnInit() {
  }

}
