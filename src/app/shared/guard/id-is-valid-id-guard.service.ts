import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IdIsValidIdGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const id = Number(next.paramMap.get('id'));

    if (!isNaN(id) && id > 0) {
      return true
    } else {
      this.router.navigateByUrl('/products')
      return false
    }
  }
}
