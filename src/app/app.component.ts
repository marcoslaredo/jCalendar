import { Component } from '@angular/core';
import { Month } from './month.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  month = Month.JUNE;
  year = 2020;
}
