import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { merch } from '../../shares/models/merchint.model';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchapp',
  templateUrl: './merchapp.component.html',
  styleUrls: ['./merchapp.component.css']
})
export class MerchappComponent implements OnInit {

  constructor(private Mservice: MerchService, private router: ActivatedRoute, private route: Router) { }

  merchs: merch[] = [];
  id: Number;
  mname: String;
  price: Number;
  desc: String;
  PhotoFileName: String;
  imageURL = this.Mservice.PhotoUrl


  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.Mservice.GET_merch(this.id).subscribe((data)=>{
      this.mname = data.mname;
      this.price = data.price;
      this.desc = data.desc
     this.PhotoFileName = this.Mservice.PhotoUrl+data.PhotoFileName;
      console.log(data);
  });
  }

  onSubmit(form: NgForm){
    console.log(form)
    
  }

}
