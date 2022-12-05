import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {IvyCarouselModule} from "angular-responsive-carousel"
import { HomeComponent } from '../pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule} from '@angular/material/form-field'
import {} from '@angular/material/core'
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule} from '@angular/forms'
import { MatTabsModule} from '@angular/material/tabs'
import {TopMenuComponent}  from '../top-menu/top-menu.component'


const route: Routes = [
    {
      path: 'home',
      component: HomeComponent
    }
  ]

  @NgModule({
    imports: [
      CommonModule,
      MatTabsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatInputModule,
    IvyCarouselModule,
    RouterModule.forChild(route)
    ],
    declarations: [TopMenuComponent,HomeComponent]
  })
  export class HomeComponentModule { }