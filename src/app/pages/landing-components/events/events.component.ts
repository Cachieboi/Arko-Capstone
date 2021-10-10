import { Component, OnInit } from '@angular/core';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { eventint } from '../../../shares/models/eventsint.model';
import { merch } from '../../../shares/models/merchint.model';
import { EventService } from 'src/app/shares/services/Events.service';
import { Events } from '@tinymce/tinymce-angular/editor/Events';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  events: eventint[] = [];

  event1: eventint;
  event2: eventint;
  event3: eventint;
  event4: eventint;
  event5: eventint;
  event6: eventint;
  event7: eventint;

 

 

  merchs: merch[] = [];

  eventName: String;
  eventLink: String;
  urlofunderconstruction: String 
  imgurl: String = "https://cdn.britannica.com/22/127022-004-DDEB9FD1/Apartment-buildings-construction-Cambridge-Eng.jpg";
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
    console.log(this.imageURLz+this.event1.PhotoFileName);
    
  }

  showMerchs(){
    this.Mservice.GET_merchs().subscribe(data=>{
      this.merchs=data;
  
    });

  }

  checkImage: boolean  = true;
  checkImage2: boolean  = true;
  checkImage3: boolean  = true;
  checkImage4: boolean  = true;
  checkImage5: boolean  = true;
  checkImage6: boolean  = true;
  checkImage7: boolean  = true;
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
    if(this.event1 == undefined || this.event1 == null){
      this.checkImage  = false;
    }else{
      this.checkImage = true;
    }
    if(this.event2 == undefined || this.event2 == null){
      this.checkImage2  = false;
    }else{
      this.checkImage2 = true;
    }
    if(this.event3 == undefined || this.event3 == null){
      this.checkImage3  = false;
    }else{
      this.checkImage3 = true;
    }
    if(this.event4 == undefined || this.event4 == null){
      this.checkImage4  = false;
    }else{
      this.checkImage4 = true;
    }
    if(this.event5 == undefined || this.event5 == null){
      this.checkImage5  = false;
    }else{
      this.checkImage5 = true;
    }
    if(this.event6 == undefined || this.event6 == null){
      this.checkImage6  = false;
    }else{
      this.checkImage6 = true;
    }
    if(this.event7 == undefined || this.event7 == null){
      this.checkImage7  = false;
    }else{
      this.checkImage7 = true;
    }
    })
  }

  public 
  (index: number, merch: merch){
   
    return merch.id;
    console.log(merch.id);
  }

 
 
}
