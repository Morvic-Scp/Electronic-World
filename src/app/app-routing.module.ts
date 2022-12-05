import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
// import { ProductPageComponent } from './pages/product-page/product-page.component'

export const Approutes: Routes = [
  {
    path:'home', loadChildren:()=>import('./lazyLoadingModules/home.module').then(x=>x.HomeComponentModule)
  },
  {
    path:'product/:name', loadChildren:()=>import('./lazyLoadingModules/product-page/product-page.module').then(y=>y.ProductPageModule)
  },
  {
    path:'**',redirectTo:'/home', pathMatch:'full'
  },
];

