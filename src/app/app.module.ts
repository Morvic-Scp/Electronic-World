import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Approutes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { HomeComponentModule } from '../app/lazyLoadingModules/home.module';
import { BreadcrumbModule } from "angular-crumbs";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HomeComponentModule,
    RouterModule.forRoot(Approutes,{useHash:false})
  ],
  providers: [
    BreadcrumbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
