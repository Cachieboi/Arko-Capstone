import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { merch } from '../../../shares/models/merchint.model';
import { MerchService } from 'src/app/shares/services/Merch.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private Mservice: MerchService) { }

  ngOnInit(): void {
    this.showMerchs();
  }
  imageURL = this.Mservice.PhotoUrl;
  merchs: merch[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:4500,
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

  showMerchs(){
    this.Mservice.GET_merchs().subscribe(data=>{
      this.merchs=data;
      this.merchs.reverse();
  
    });

  }

}
