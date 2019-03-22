import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { StarComponent } from './shared/ui/star/star.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product/product.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarComponent,
    ProductListComponent,
    ProductEditComponent,
    WelcomeComponent,
    ProductSearchPipe,
    ProductDetailComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
