import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardGuard implements CanActivate{
  constructor(private cookieService: CookieService, private router: Router){
  
  }
  superuser: any = this.cookieService.get('is_superuser');
  author: any = this.cookieService.get('is_author');

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    if(this.superuser == 'true' || this.author == 'true'){
    return true;
    }else{

      this.router.navigate(['/login'],);
      alert('UNAUTHORIZED, only Admins and Authors can access this');
     
       return false;
      }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    if (this.superuser == true) {
     
      return true;
    } else {
      alert('UNAUTHORIZED, Only admins can access this');
      this.router.navigate(['dashboard'], {
      });

      return false;
    }
  }
  
}

