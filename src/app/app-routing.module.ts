import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductComponent} from './product/product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {IdIsValidIdGuard} from './shared/guard/id-is-valid-id-guard.service';
import {LoginComponent} from './auth/login/login.component';
import {UserLoginGuard} from './shared/guard/user-login.guard';
import {UserUnloggedGuard} from './shared/guard/user-unlogged.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent, canActivate: [UserLoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [UserUnloggedGuard]},
  {
    path: 'products',
    component: ProductComponent, canActivate: [UserLoginGuard], children: [
      {path: '', component: ProductListComponent},
      {path: ':id/edit', component: ProductEditComponent, canActivate: [IdIsValidIdGuard]},
      {path: ':id', component: ProductDetailComponent, canActivate: [IdIsValidIdGuard]}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
