import { Component, OnInit } from '@angular/core';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { Merch } from '../../../shares/models/Merch.model'
import { merch } from '../../../shares/models/merchint.model'



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  merchs: merch[] = [];
  
  id: Number;
  mname: String;
  price: Number;
  desc: String;
  PhotoFilePath: String;
  PhotoFileName: String;

  constructor(private Mservice: MerchService) { }
  imageURL = this.Mservice.PhotoUrl

  ngOnInit(): void {
    this.showMerchs();
    
  }

  showMerchs(){
    this.Mservice.GET_merchs().subscribe(data=>{
      this.merchs=data;
      console.log(data);
    });
  }



}
