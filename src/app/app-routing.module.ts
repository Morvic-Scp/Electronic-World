import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const Approutes: Routes = [
  {path:'home', loadChildren:()=>import('./lazyLoadingModules/home.module').then(x=>x.HomeComponentModule)},
  {path:'**',redirectTo:'/home', pathMatch:'full'},
];

