import { Component, OnInit, Input } from '@angular/core';
import { Month } from '../month.enum';


@Component({
  selector: 'app-month-header',
  templateUrl: './month-header.component.html',
  styleUrls: ['./month-header.component.scss']
})
export class MonthHeaderComponent implements OnInit {

  @Input() _month: Month = Month.SEPTEMBER;
  @Input() _year: number = 1980;

  constructor() { }

  ngOnInit(): void {
  }

  get allMonths(): Month[] {
    let list = [];
    const months = Object.keys(Month).filter( m => isNaN(Number(m)));
    for (const month in months) {
      list.push(Number(month));
    }
    return list;
  }

  get month(): Month {
    return this._month;
  }
  set month( month: Month ) {
    this._month = month;
  }

  get year(): number {
    return this._year;
  }
  set year( year: number ) {
    this._year = year;
  }

  monthName(month: Month): string {
    return Month[month];
  }

  yearString(): string {
    return `${this._year}`;
  }

  gotoPrevMonth() {
    const prevMonth = this.month - 1
    this._month = prevMonth < 0 ? prevMonth + 12 : prevMonth;
  }

  gotoNextMonth() {
    const nextMonth = this.month + 1
    this._month = nextMonth > 11 ? nextMonth - 12 : nextMonth;
  }

  monthSelector(month: Month) {
    this.month = month;
  }

  yearSelector() {
    console.log('year selector');
  }
}
