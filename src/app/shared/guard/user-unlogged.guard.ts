import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserUnloggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.authService.isLogged) {
      return true
    } else {
      this.router.navigateByUrl('/')
      return false
    }
  }
}
