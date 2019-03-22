import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductComponent} from './product/product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HeaderComponent} from './layout/header/header.component';

const routes: Routes = [
  {path: '', component: HeaderComponent, outlet: 'header'},
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {
    path: 'products',
    component: ProductComponent, children: [
      { path: '', component: ProductListComponent},
      { path: ':id/edit', component: ProductEditComponent},
      { path: ':id', component: ProductDetailComponent}
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
