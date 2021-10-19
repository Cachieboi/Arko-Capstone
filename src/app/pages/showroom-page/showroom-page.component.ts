import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  Viewer, MarkersPlugin, markers } from 'photo-sphere-viewer';
import { ActivatedRoute, Router } from '@angular/router';
import { showroom } from '../../shares/models/showroomint.model';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';



@Component({
  selector: 'app-showroom-page',
  templateUrl: './showroom-page.component.html',
  styleUrls: ['./showroom-page.component.css']
})

export class ShowroomPageComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private shService: ShowroomService) { }

  ngOnInit(): void {
    this.showShowrooms();
  }
  p: number = 1;
  count: Number = 5;

showrooms: showroom[] = [];
PhotoFilePath: String;
PhotoFileName: String;
imageURL = this.shService.PhotoUrl

showShowrooms(){
  this.shService.GET_showrooms().subscribe(data=>{
    this.showrooms=data;
    this.showrooms.reverse();
    console.log(data);
  });
}


}
