import { Component, OnInit } from '@angular/core';
import { ROOMSINTERFACE } from '../mock-rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms = ROOMSINTERFACE;
  newRooms = []

  constructor() { }

  ngOnInit(): void {
  }

  addRoom(newRooms:any){
    if(newRooms){
      this.rooms.push(newRooms);
    }
  }

}
