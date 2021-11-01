import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shares/services/Events.service';
import { eventint } from 'src/app/shares/models/eventsint.model';
import {OwlOptions} from 'ngx-owl-carousel-o';
import SwiperCore, { SwiperOptions } from 'swiper';
import { merch } from '../../shares/models/merchint.model';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { showroom } from '../../shares/models/showroomint.model';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from '../../shares/models/articleint.model';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { Teams } from '../../shares/models/Teams.model';
import { TeamsService } from 'src/app/shares/services/Teams.Service';
@Component({
  selector: 'app-landing-components',
  templateUrl: './landing-components.component.html',
  styleUrls: ['./landing-components.component.css']
})
export class LandingComponentsComponent implements OnInit {

  constructor(private Eservice: EventService, 
    private Mservice: MerchService,   
    private Shservice: ShowroomService,
    private router: Router, 
    private route:ActivatedRoute, 
    private Arservice: ArticleService,
    private tService: TeamsService,) { }

  events: eventint[] = [];
  ngOnInit(): void {
    this.showEvents();
    this.showMerchs();
    this.showShowrooms();
    this.showArticles();
    this.showTeams();
  }
  merchs: merch[] = [];
  imageURL = this.Eservice.PhotoUrl;
  PhotoFilePath: String;
  PhotoFileName: String;
  images = [
    {path: 'imageURL+this.events[i].PhotoFileName'},
  ];
  i: number = 1;
  test =[];
 
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

showEvents(){
  this.Eservice.GET_eventsReadOnly().subscribe(data=>{
    this.events=data;
    this.events.reverse();
  });

}
showMerchs(){
  this.Mservice.GET_merchsReadOnly().subscribe(data=>{
    this.merchs=data;
    this.merchs.reverse();
  });
}
showrooms: showroom[] = [];
    showShowrooms(){
      this.Shservice.GET_showroomsReadOnly().subscribe(data=>{
        this.showrooms=data;
        this.showrooms.reverse();
        console.log(data);
      });
    
    }

    onMoreArticles(){
      this.router.navigate(['more']);
    }
  
    articles: article[] = [];
    showArticles(){
      this.Arservice.GET_articlesReadOnly().subscribe(data=>{
        this.articles=data;
        this.articles.reverse(); 
        for(var i = 0; i <= this.articles.length; ++i){
          if(this.articles[i].is_approved == false){
            this.articles.splice(i,1);
            console.log(this.articles[i])
            
          }
          for(var i = 0; i <= this.articles.length; ++i){
            if(this.articles[i].is_approved == false){
              this.articles.splice(i,1);
              console.log(this.articles[i])
              
            }
            
          }
        }
      });
      console.log(this.articles.length);
    }

  teams: Teams[] = [];
  showTeams(){
    this.tService.GET_TeamsReadOnly().subscribe(data=>{
      this.teams=data;
      this.teams.reverse();
    });
  }

}
