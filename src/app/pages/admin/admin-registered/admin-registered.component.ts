import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { ArchivingService } from 'src/app/shares/services/Archiving.service';
import { DatePipe } from '@angular/common';
import { analyzeAndValidateNgModules, ThisReceiver, ThrowStmt } from '@angular/compiler';
import { registrantint } from 'src/app/shares/models/registrantint.mode';
import { textChangeRangeIsUnchanged } from 'typescript';
import {MatDialog} from '@angular/material/dialog';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-registered',
  templateUrl: './admin-registered.component.html',
  styleUrls: ['./admin-registered.component.css']
})
export class AdminRegisteredComponent implements OnInit {
  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
});
  @ViewChild('userTable') userTable: ElementRef;
  @ViewChild('callAPIDialogz') callAPIDialogz: TemplateRef<any>; 
  constructor(private shService: ShowroomService, private archService: ArchivingService, public datepipe: DatePipe, public dialog: MatDialog) {
    
  }
  registrant: registrantint[] = []; 
  arrayTest: registrantint[] = [];
  arrayzTest: registrantint[] = [];
  p: number = 1;
  id: number;

  ngOnInit(): void {
    this.showRegistrants();
  this.showSecondArray();
  
    
    }
  pipe = new DatePipe('en-US');
  is_superuser : Boolean;
  title: String = "Registrants of "
  dateToday = new Date();
  latest: String = this.datepipe.transform(this.dateToday, 'yyyy');
  finalTitle :string = this.title + " " + this.latest;
  i : number;
  registrantLength: number;
  
  showRegistrants(){
    this.shService.GET_registrants().subscribe(data=>{
    this.registrant = data.reverse();
    for(var i = 0; i <= this.registrant.length; i++){
      if(this.registrant[i].is_author == false && this.registrant[i].is_superuser==false){
        
        this.arrayTest.push(this.registrant[i]);
      }
    }
    });
  }
  exportElmToExcel(registrant): void {
   
    if(confirm('Are you sure??')){
    this.archService.exportAsExcelFile(this.arrayTest, this.finalTitle);
    this.archiveRegistrants(registrant);
    
  }
}
archiveRegistrants(registrant){
  this.shService.GET_registrants().subscribe(data=>{
    this.registrant = data.reverse();
    for(var i = 0; i <= this.registrant.length; i++){
      if(this.registrant[i].is_author == false && this.registrant[i].is_superuser==false){
        this.shService.DELETE_registrants(this.registrant[i].id).subscribe(data=>{
        })
      }
    }
 
    });
}

openDialogz() {
  let dialogRef = this.dialog.open(this.callAPIDialogz,{
    width: '1500px',
    height: '500px'

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

showSecondArray(){
  this.shService.GET_registrants().subscribe(data=>{
    this.registrant = data.reverse();
    for(var i = 0; i <= this.registrant.length; i++){
      if(this.registrant[i].is_author == false && this.registrant[i].is_superuser==false){
        
        this.arrayzTest.push(this.registrant[i]);
      }
    }
    });
    console.log()
}

applyFilter(form : NgForm) {
  console.log(form.value.startzDate);

  const startuDate = this.pipe.transform(form.value.startzDate, 'MM/dd/YYYY')
  const enduDate = this.pipe.transform(form.value.endzDate, 'MM/dd/YYYY')

  this.shService.GET_registrants().subscribe(data=>{
   
    this.arrayzTest = data.reverse().filter(data=>{
      const dateJoinedz = this.pipe.transform(data.dateJoined, 'MM/dd/YYYY')
      return dateJoinedz >= startuDate && dateJoinedz <= enduDate
    
      
    })
    
  })

/*for(var i = 0; i <= this.arrayzTest.length; i++){
 if(this.testDate <= form.value.startzDate){

 }
}*/  

console.log("Hello"); 

}

}