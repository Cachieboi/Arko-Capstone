import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  Viewer } from 'photo-sphere-viewer'


const container = document.getElementById('viewer');
@Component({
  selector: 'app-showroom-page',
  templateUrl: './showroom-page.component.html',
  styleUrls: ['./showroom-page.component.css']
})
export class ShowroomPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }

  

  
main(){
  const view = new Viewer({
    panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
    container: 'viewer'
   
  });

}

}
