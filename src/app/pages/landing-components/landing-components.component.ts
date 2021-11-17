import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
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
import {MatDialog} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RegisterUser } from 'src/app/shares/models/RegisterUser.model';
import { regis } from 'src/app/shares/models/regis.model';
import {CookieService} from 'ngx-cookie-service';


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
    private tService: TeamsService,
    public dialog: MatDialog,
    private cookieService: CookieService) { }
    imageURLz = this.Eservice.PhotoUrl
    todaysDate: Date = new Date();
  events: eventint[] = [];
  ngOnInit(): void {
    this.showEvents();
    this.showMerchs();
    this.showShowrooms();
    this.showArticles();
    this.showTeams();
    
  }

 

  @ViewChild('callAPIDialogz') callAPIDialogz: TemplateRef<any>; 
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  @ViewChild('callAPIDialog2') callAPIDialog2: TemplateRef<any>;
  @ViewChild('callAPIDialog3') callAPIDialog3: TemplateRef<any>;
  @ViewChild('callAPIDialog4') callAPIDialog4: TemplateRef<any>;
  @ViewChild('callAPIDialog5') callAPIDialog5: TemplateRef<any>;
  @ViewChild('callAPIDialog6') callAPIDialog6: TemplateRef<any>;
  @ViewChild('callAPIDialog7') callAPIDialog7: TemplateRef<any>;
  @ViewChild('construct') construct: TemplateRef<any>;
  @ViewChild('construct2') construct2: TemplateRef<any>;
  @ViewChild('callAPIDialogpo') callAPIDialogpo: TemplateRef<any>; 
  @ViewChild('callAPIDialogzz') callAPIDialogzz: TemplateRef<any>; 
  @ViewChild('callAPIDialog8') callAPIDialog8: TemplateRef<any>;

  event1: eventint;
  event2: eventint;
  event3: eventint;
  event4: eventint;
  event5: eventint;
  event6: eventint;
  event7: eventint;


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
    this.event1 = this.events[0];
    this.event2 = this.events[1];
    this.event3 = this.events[2];
    this.event4 = this.events[3];
    this.event5 = this.events[4];
    this.event6 = this.events[5];
    this.event7 = this.events[6];
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

  openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog,{
      width: '700px',
      height: '600px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  appForm(){
    this.router.navigate(['Application-Form']);
  }

  openDialog2() {
    let dialogRef = this.dialog.open(this.callAPIDialog2,{
      width: '600px',
      height: '600px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialog3() {
    let dialogRef = this.dialog.open(this.callAPIDialog3,{
      width: '600px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialog4() {
    let dialogRef = this.dialog.open(this.callAPIDialog4,{
      width: '600px',
      height: '600px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialog5() {
    let dialogRef = this.dialog.open(this.callAPIDialog5,{
      width: '600px',
      height: '600px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialog6() {
    let dialogRef = this.dialog.open(this.callAPIDialog6,{
      width: '600px',
      height: '600px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialog7() {
    let dialogRef = this.dialog.open(this.callAPIDialog7,{
      width: '600px',
      height: '600px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }
  openConstruct() {
    let dialogRef = this.dialog.open(this.construct,{
      width: '450px',
      height: '450px'
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialogz() {
    let dialogRef = this.dialog.open(this.callAPIDialogz,{
      width: '700px',
  
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

  openDialogo() {
    const timeout = 10;
    let dialogRef = this.dialog.open(this.callAPIDialogpo,{
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
   
}

openReg(){
  let dialogRef = this.dialog.open(this.callAPIDialogzz,{
    width: '300px',
    height: '300px',

  });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
}

ticket:String ="";
getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  this.ticket;
  for ( var i = 0; i < length; i++ ) {
      this.ticket += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return this.ticket;
}
_token: any;
onSend(form: NgForm){

  const val = form.value;
  const regisAccount = new regis(val.email, val.password);
  this.Shservice.regLogin(regisAccount).subscribe((results: any)=>{
    this._token = this.cookieService.set('mr-token', results.token);
    console.log(results);
    console.log('*********'+this._token);
   this.dialog.closeAll();
    this.router.navigate(['Showroom-page']);
  },
  error => {
    alert("Invalid Input")
  })

}


onReg(form: NgForm){
  
  if(confirm("Are you Sure you with your Input?")){
    const value = form.value;
    const newRegistrant = new RegisterUser(value.id, value.firstname, value.lastname,value.email,this.getRandomString(10));
    this.Shservice.registerShowroom(newRegistrant).subscribe(
      data => {
        console.log(value.id);
        console.log(value.firstname);
        console.log(value.lastname);
        console.log(this.getRandomString(10));
        alert("Successfully Registered")
        alert("An Email will be sent to you containing your ticket")
        console.log(data);
      },
      error => {
        alert("There was an Error with Registering")
      }
       
      );
    }
}

openDialog8() {
  let dialogRef = this.dialog.open(this.callAPIDialog8,{
    width: '600px',
    height: '600px'

  });
  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
          if (result !== 'no') {
            const enabled = "Y"
              console.log(result);
          } else if (result === 'no') {
             console.log('User clicked no.');
          }
      }
  })
}

}
