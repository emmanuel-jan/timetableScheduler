import { Component, OnInit } from '@angular/core';
import { COURSESINTERFACE } from '../mock-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSESINTERFACE;
  newCourse = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(newCourse: any){
    if(newCourse){
      this.courses.push(newCourse);
    }
  }

}
