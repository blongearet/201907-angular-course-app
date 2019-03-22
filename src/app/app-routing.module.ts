import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductComponent} from './product/product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {IdIsValidIdGuard} from './shared/guard/id-is-valid-id-guard.service';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'products',
    component: ProductComponent, children: [
      { path: '', component: ProductListComponent},
      { path: ':id/edit', component: ProductEditComponent, canActivate: [IdIsValidIdGuard]},
      { path: ':id', component: ProductDetailComponent, canActivate: [IdIsValidIdGuard]}
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
