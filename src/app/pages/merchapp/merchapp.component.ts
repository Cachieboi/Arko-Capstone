import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { merch } from '../../shares/models/merchint.model';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-merchapp',
  templateUrl: './merchapp.component.html',
  styleUrls: ['./merchapp.component.css']
})
export class MerchappComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private Mservice: MerchService, 
    private router: ActivatedRoute, 
    private route: Router) { }

  merchs: merch[] = [];
  id: Number;
  mname: String;
  price: Number;
  email: String;
  desc: String;
  quantity: Number;
  PhotoFileName: String;
  imageURL = this.Mservice.PhotoUrl
  scriptURL = 'script.google.com/macros/s/AKfycbwbplsYBDFn8IxacMJzWtAnZhkJhytvyoT2-wT3UzQVZr-SjHNsOdb0JyN9YgMMCTqB/exec';

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
