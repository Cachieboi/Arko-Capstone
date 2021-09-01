import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shares/services/Account.service';
import { Useraccount } from 'src/app/shares/models/UserAccount.model';
import { Account } from '../../../../shares/models/Accounts.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-accounts-list',
  templateUrl: './admin-accounts-list.component.html',
  styleUrls: ['./admin-accounts-list.component.css']
})
export class AdminAccountsListComponent implements OnInit {


 

  constructor(private Aservice: AccountService,
              private router : Router) { }

  accounts: any[] = []; 
  id: number;
  lastname: String;

  ngOnInit(): void {
      this.showAccounts();
      }

   showAccounts(){
     this.Aservice.GET_accounts().subscribe(data=>{
       this.accounts=data;
       console.log(data);
     });
   }
   
   
   deleteClick(account){
    if(confirm('Are you sure??')){
      this.Aservice.DELETE_accounts(account.id).subscribe(data=>{
        alert("Successfully Deleted The Account");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Account")
      })
      

    } 
  }

  editAccounts(){
    var val = {
      id:this.id, lastname: this.lastname};
    this.Aservice.EDIT_accounts(val).subscribe(res=>{
      alert(res.toString());
    });

   
  }

  refreshAccList(){
    this.Aservice.GET_accounts().subscribe(data=>{
      this.accounts=data;
    });
  }
  
    
  }

  

 

