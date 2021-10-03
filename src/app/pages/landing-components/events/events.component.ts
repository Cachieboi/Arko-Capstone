import { Component, OnInit } from '@angular/core';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { eventint } from '../../../shares/models/eventsint.model';
import { merch } from '../../../shares/models/merchint.model';
import { EventService } from 'src/app/shares/services/Events.service';
import { Events } from '@tinymce/tinymce-angular/editor/Events';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: eventint[] = [];

  event1: eventint;
  event2: eventint;
  event3: eventint;
  event4: eventint;
  event5: eventint;;
  event6: eventint;
  event7: eventint;

 

  eventsz: eventint;

  merchs: merch[] = [];

  eventName: String;
  eventLink: String;
  
  id: Number;
  mname: String;
  price: Number;
  desc: String;
  PhotoFilePath: String;
  PhotoFileName: String;

  constructor(private Mservice: MerchService, private eService: EventService) { }
  imageURL = this.Mservice.PhotoUrl;
  imageURLz = this.eService.PhotoUrl;

  ngOnInit(): void {
    this.showMerchs();
    this.showEvents();
    console.log(this.events[1]);
  }

  showMerchs(){
    this.Mservice.GET_merchs().subscribe(data=>{
      this.merchs=data;
      console.log(data);
    });
  }


  showEvents(){
    this.eService.GET_events().subscribe(data=>{
      this.events = data;
      this.event1 = this.events[0];
      this.event2 = this.events[1];
      this.event3 = this.events[2];
      this.event4 = this.events[3];
      this.event5 = this.events[4];
      this.event6 = this.events[5];
      this.event7 = this.events[6];
      console.log(this.event1);
    })
  }



}
