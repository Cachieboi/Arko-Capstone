import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/shares/services/Account.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/shares/models/User.model';
import { user } from 'src/app/shares/models/userint.model';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
    private Aservice: AccountService, 
    private cookieService: CookieService,
    private http:HttpClient ) { }

  login = true;
  

  ngOnInit(): void {

  }
  _id:any;
  _email: any;
  _is_superuser: any;
  _is_author: any;
  _token: any;
  _lastname: any;
  _firstname: any;
  

  userLoginz(form: NgForm){
    
    const val = form.value;
    const userAccount = new User(val.email, val.password);
    this.Aservice.userLogin(userAccount).subscribe(
      (result: any) => {
        this._token = this.cookieService.set('mr-token', result.token);
        this._id = this.cookieService.set('id', result.id);
        this._email = this.cookieService.set('email', result.email);
        this._is_superuser = this.cookieService.set('is_superuser', result.is_superuser);
        this._lastname = this.cookieService.set('lastname',result.lastname);
        this._firstname=this.cookieService.set('firstname',result.firstname);
        this._is_author=this.cookieService.set('is_author',result.is_author);
       

        this.router.navigate(['dashboard']); 
       
  },
  error => {
    alert("Invalid Email/Password Input")
  }
  );
}
  

 

}
