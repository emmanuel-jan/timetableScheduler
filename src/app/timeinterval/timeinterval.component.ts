import { Component, OnInit } from '@angular/core';
import { TimeInterval } from '../timeInterface';

@Component({
  selector: 'app-timeinterval',
  templateUrl: './timeinterval.component.html',
  styleUrls: ['./timeinterval.component.css']
})
export class TimeintervalComponent implements OnInit {

  timeInterval:TimeInterval[] = [];
  newTimeInterval = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTime(newTimeInterval:any){
    if(newTimeInterval){
      this.timeInterval.push(newTimeInterval);
    }
  }

}
