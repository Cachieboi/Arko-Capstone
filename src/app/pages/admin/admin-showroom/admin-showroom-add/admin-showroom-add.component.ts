import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { Router } from '@angular/router';
import { showroom } from '../../../../shares/models/showroom.model';

@Component({
  selector: 'app-admin-showroom-add',
  templateUrl: './admin-showroom-add.component.html',
  styleUrls: ['./admin-showroom-add.component.css']
})
export class AdminShowroomAddComponent implements OnInit {

  constructor(private shService: ShowroomService, private router: Router) { }

  ngOnInit(): void {
  }

  PhotoFilePath: String;
  PhotoFileName: String;


  addShowroom(form: NgForm){
    if(confirm("Are you Sure you want to Add this Article?")){
      const value = form.value;
      const PhotoFileName = this.PhotoFileName
      const newArticle = new showroom(value.id,PhotoFileName,value.Title,value.Description,value.AuthorName);
      this.shService.addShowroom(newArticle).subscribe(
        data => {
          console.log(data);
          alert("Successfully Added")
          this.router.navigate(['dashboard/exhibit']);
        },
        error => {
          alert("There was an Error with Adding an Article")
        }
         
        );
      }
    }

    
  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.shService.UploadPhoto_Showroom(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.shService.PhotoUrl+this.PhotoFileName;
    })
  }
  }




