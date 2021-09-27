import { Component, OnInit } from '@angular/core';
import {  Viewer, MarkersPlugin, markers } from 'photo-sphere-viewer';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { Router, ActivatedRoute } from '@angular/router';
import { showroom } from '../../shares/models/showroomint.model';

@Component({
  selector: 'app-showroom-room',
  templateUrl: './showroom-room.component.html',
  styleUrls: ['./showroom-room.component.css']
})
export class ShowroomRoomComponent implements OnInit {

  constructor(private shService: ShowroomService, private router: Router,private route: ActivatedRoute) { }

  id: Number;
  Title: String;
  Description: String;
  AuthorName : String;
  thisShowroom : showroom;
  PhotoFileName: String;

  imageURL = this.shService.PhotoUrl
  
 img: String;

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Title = this.route.snapshot.params['title'];
    this.shService.GET_showroom(this.id).subscribe((data)=>{
    this.thisShowroom = data;
    console.log(data);
  });
  this.main();
  }

  ngAfterViewInit(): void{

  }

  

  main(){
   
    this.shService.GET_showroom(this.id).subscribe((data)=>{
      this.thisShowroom = data
  
    const view = new Viewer({
      panorama: this.shService.PhotoUrl+this.thisShowroom.PhotoFileName,
      container: 'viewer',
      caption: this.Title,
      loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
      defaultLat: 0.3,
      touchmoveTwoFingers: true,
      mousewheelCtrlKey: true,
  
    });
  });
  
  } 

}
