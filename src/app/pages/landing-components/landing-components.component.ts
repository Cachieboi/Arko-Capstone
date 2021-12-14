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
import { AccountService } from 'src/app/shares/services/Account.service';
import { MatCheckboxChange } from '@angular/material/checkbox';


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
    private cookieService: CookieService,
    private Aservice : AccountService) { }
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
  @ViewChild('agreeFormz') agreeFormz: TemplateRef<any>;

  event1: eventint;
  event2: eventint;
  event3: eventint;
  event4: eventint;
  event5: eventint;
  event6: eventint;
  event7: eventint;

  selectedValue: string = '';

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
  
  }
  onSlideChange() {
  
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
          
            
          }
          for(var i = 0; i <= this.articles.length; ++i){
            if(this.articles[i].is_approved == false){
              this.articles.splice(i,1);
              
              
            }
            
          }
        }
      });
  
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
       
            } else if (result === 'no') {
             
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
           
            } else if (result === 'no') {
       
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
           
            } else if (result === 'no') {
             
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
         
            } else if (result === 'no') {
            
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
 
            } else if (result === 'no') {
            
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
        
            } else if (result === 'no') {
            
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
         
            } else if (result === 'no') {
            
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

            } else if (result === 'no') {
               
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
         
            } else if (result === 'no') {
           
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
          
            } else if (result === 'no') {
              
            }
        }
    })
   
}

openReg(){

  let dialogRefz = this.dialog.open(this.agreeFormz,{
    width: '700px',
    height: '600px'
    
  });
}

openRegz(){

  let dialogRef = this.dialog.open(this.callAPIDialogzz,{
    width: '500px',
    height: '500px',
  
  });
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

   this.dialog.closeAll();
    this.router.navigate(['Showroom-page']);
  },
  error => {
    alert("Invalid Input")
  })

}

accounts: any[] = []; 
onReg(form: NgForm){
  const value = form.value;
  const dateJoined = new Date();
  if(confirm("Are you Sure you with your Input?")){
    if(value.watcherType == "Guest"){
    const newRegistrant = new RegisterUser(value.id, value.firstname, value.lastname,value.email,this.getRandomString(10),value.watcherType,value.orgName, dateJoined);
    this.Shservice.registerShowroom(newRegistrant).subscribe(
      data => {

        alert(data.toString());
      },
      );
  }
  if(value.watcherType == "UST Student" ||value.watcherType == "Alumni"){
    const orgName = "N/A";
    const newRegistrant = new RegisterUser(value.id, value.firstname, value.lastname,value.email,this.getRandomString(10),value.watcherType,orgName, dateJoined);
    this.Shservice.registerShowroom(newRegistrant).subscribe(
      data => {

        alert(data.toString());
      },
      );
  }
}
}

checkAgree: boolean = false;

onChange(ob: MatCheckboxChange){
      if (ob.checked){
        this.checkAgree = true;    
      }else{
        this.checkAgree = false;
       
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
            
          } else if (result === 'no') {
             
          }
      }
  })
}


yearLevel = [
  {level: 'Guest'},
  {level: 'Alumni'},
  {level: 'Student(UST)'},
  {level: 'Student(Other School)'},
];

}


