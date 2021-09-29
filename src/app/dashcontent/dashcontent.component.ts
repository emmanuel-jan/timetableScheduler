import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashcontent',
  templateUrl: './dashcontent.component.html',
  styleUrls: ['./dashcontent.component.css']
})
export class DashcontentComponent implements OnInit {

  constructor() { }

  isShown: boolean = false;

  showTimetable(){
    this.isShown = !this.isShown;
  }

  ngOnInit(): void {
  }

}
