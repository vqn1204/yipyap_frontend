import { Component, OnInit } from '@angular/core';
import { YipyapService } from './../../services/yipyap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  username: String;
  password: String;

  submitLogin() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
