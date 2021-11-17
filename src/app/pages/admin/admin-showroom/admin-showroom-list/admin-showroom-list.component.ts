import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { Router } from '@angular/router';
import { showroom } from '../../../../shares/models/showroom.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-admin-showroom-list',
  templateUrl: './admin-showroom-list.component.html',
  styleUrls: ['./admin-showroom-list.component.css']
})
export class AdminShowroomListComponent implements OnInit {


  showrooms: showroom[] = [];
  constructor(private shService: ShowroomService, private datePipe: DatePipe) { 


  }
  testString: String;
  p: number = 1;
  datePipeString : string;
  Enddate: String;

  ngOnInit(): void {
    
    this.showShowrooms();
    this.checker();
  }
  showShowrooms(){
    this.shService.GET_showrooms().subscribe(data=>{
      this.showrooms=data;
      this.showrooms.reverse();
      console.log(data);
    });
  }
  deleteClick(showroom){
    if(confirm('Are you sure??')){
      this.shService.DELETE_showroom(showroom.id).subscribe(data=>{
        alert("Successfully Deleted The Article");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Showroom")
      })
      

    } 
  }
    checker(){
      this.shService.GET_showrooms().subscribe(data=>{
        this.showrooms=data;
        this.showrooms.reverse();
        this.datePipeString = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
        for(var i = 0; i <= this.showrooms.length; i++){
          this.Enddate = this.datePipe.transform(this.showrooms[i].EndDate,'yyyy-MM-dd');
          if(this.Enddate == this.datePipeString){
            this.shService.DELETE_showroom(this.showrooms[i].id).subscribe(data=>{
              window.location.reload();
            },
            error =>{
              alert("There was an Error with Deleting the Showroom")
            })
          }
        }
      });
  }

}
