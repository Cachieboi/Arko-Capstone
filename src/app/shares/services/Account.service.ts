import { EventEmitter } from "@angular/core";
import { Useraccount } from "../models/UserAccount.model";
import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from 'src/app/shares/models/userint.model';





@Injectable({
  providedIn: 'root'
  })
  

export class AccountService{
  accountlist = new EventEmitter<Useraccount[]>();
 

  constructor(private http:HttpClient,
    private cookieService: CookieService){

}
  APIUrl = 'https://arko-ust.herokuapp.com/';
  readonly PhotoUrl = 'https://arko-ust.herokuapp.com/media/';
  token = this.cookieService.get('mr-token');
  headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: "Token" + this.token
  });

  userLogin(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(this.APIUrl + "Accounts/auth/", body, {headers: this.headers});
}

  registerUser(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(this.APIUrl + 'Accounts/users/', body, {headers: this.headers});
  }

  getAuthHeaders(){
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });

  }

  GET_account(id:Number){
    return this.http.get<user>(this.APIUrl + 'Accounts/users/' + id);
  }

  GET_accounts(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Accounts/users/');
  }

  EDIT_accounts(val:any){
    return this.http.put(this.APIUrl + 'Accounts/users/',val);
  }

  DELETE_accounts(val:any){
    return this.http.delete(this.APIUrl + 'Accounts/users/'+val);
  }

  UploadPhoto_Account(val:any){
    return this.http.post(this.APIUrl+'Accounts/SaveFile', val);
  }
}

  
 

