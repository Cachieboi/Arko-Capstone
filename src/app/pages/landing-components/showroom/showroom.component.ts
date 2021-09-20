import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterUser } from '../../../shares/models/RegisterUser.model'
import { Form, NgForm} from '@angular/forms';
import { regis } from 'src/app/shares/models/regis.model';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {
  ngOnInit(): void {
  }
  
  firstname: String;
  lastname: String;


  
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  @ViewChild('callAPIDialogz') callAPIDialogz: TemplateRef<any>; 

  //name = 'Angular';
  constructor(public dialog: MatDialog, 
    private Shservice: ShowroomService,
    private router: Router) { }

  openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog,{
      width: '620px'
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
  let dialogRef = this.dialog.open(this.callAPIDialogz);
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

onSend(form: NgForm){
  const val = form.value;
  const regisAccount = new regis(val.email, val.password);
  this.Shservice.regLogin(regisAccount).subscribe((results: any)=>{
    this.router.navigate(['showroom-page']);
    console.log(results);
  },
  error => {
    alert("Invalid Input")
  })

}


onReg(form: NgForm){
  
  if(confirm("Are you Sure you with your Input?")){
    const value = form.value;
    const newRegistrant = new RegisterUser(value.id, value.email, value.lastname,this.getRandomString(10));
    this.Shservice.registerShowroom(newRegistrant).subscribe(
      data => {
        console.log(value.id);
        console.log(value.firstname);
        console.log(value.lastname);
        console.log(this.getRandomString(10));
        alert("Successfully Added")
        console.log(data);
      },
      error => {
        alert("There was an Error with Registering")
      }
       
      );
    }
}




}
