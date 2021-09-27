import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-events-add',
  templateUrl: './admin-events-add.component.html',
  styleUrls: ['./admin-events-add.component.css']
})
export class AdminEventsAddComponent implements OnInit {

  constructor() { }

  PhotoFilePath: String;
  PhotoFileName: String;

  ngOnInit(): void {
  }

  uploadPhoto(event){

  }

  addEvent(form: NgForm){

  }

}
