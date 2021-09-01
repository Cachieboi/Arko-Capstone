import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Useraccount } from 'src/app/shares/models/UserAccount.model';
import { AccountService } from 'src/app/shares/services/Account.service';
import { Account } from '../../../../shares/models/Accounts.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-accounts-edit',
  templateUrl: './admin-accounts-edit.component.html',
  styleUrls: ['./admin-accounts-edit.component.css']
})
export class AdminAccountsEditComponent implements OnInit {

 
  
 
  id: Number;
  lastname: String; 
  email: String;
  password: String;
  constructor(private Aservice: AccountService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.Aservice.GET_account(this.id).subscribe((data)=>{
      this.lastname = data.lastname;
      this.email = data.email;
      console.log(data);
    });
    
  }
  editAccounts(){
    var val = {
      id:this.id, lastname: this.lastname, email: this.email};
    if(confirm('Are you Sure?')){
      this.Aservice.EDIT_accounts(val).subscribe(res=>{
        alert("The Account has been Successfully Updated!");
        this.route.navigate(['dashboard/account']);
      });
    }
    
  }

}
