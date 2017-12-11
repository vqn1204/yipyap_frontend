import { Component } from '@angular/core';
import { YipyapService } from './services/yipyap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YipyapService]
})
export class AppComponent {
  title = 'app';
}
