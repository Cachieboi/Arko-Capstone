import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventpic: string = "assets/img/img.jfif";

  constructor() { }

  ngOnInit(): void {
  }

}
