import { Component, OnInit } from '@angular/core';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { Merch } from '../../../../shares/models/Merch.model'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-admin-merch-add',
  templateUrl: './admin-merch-add.component.html',
  styleUrls: ['./admin-merch-add.component.css']
})
export class AdminMerchAddComponent implements OnInit {

  constructor(private Mservice: MerchService) { }

  ngOnInit(): void {
  }

  addMerch(form: NgForm){
    const value = form.value;
    const newMerch = new Merch(value.mname, value.price, value.desc);
    this.Mservice.addMerch(newMerch)
  }

}
