import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { regFormint } from '../../../shares/models/regForm.mode'
import { NgForm} from '@angular/forms';
import { StringifyOptions } from 'querystring';




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
  email: String;
  ticket: Number;
  
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  @ViewChild('callAPIDialogz') callAPIDialogz: TemplateRef<any>; 

  //name = 'Angular';
  constructor(public dialog: MatDialog) { }

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


onSend(form: NgForm){
  
  console.log(form);
}

onReg(form: NgForm){
  
  console.log(form);
}


}
