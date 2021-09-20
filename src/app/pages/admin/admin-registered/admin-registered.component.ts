import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';


@Component({
  selector: 'app-admin-registered',
  templateUrl: './admin-registered.component.html',
  styleUrls: ['./admin-registered.component.css']
})
export class AdminRegisteredComponent implements OnInit {

  constructor(private shService: ShowroomService) {}
  registrants: any[] = []; 

  ngOnInit(): void {
    this.showRegistrants();
  }

  showRegistrants(){
    this.shService.GET_registrants().subscribe(data=>{
      this.registrants=data;
      console.log(data);
    });
  }
  
}
