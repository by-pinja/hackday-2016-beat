import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routes';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import {ProductResolver} from "./product/resolves/product.resolver";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
