import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { NgxImageZoomModule} from 'ngx-image-zoom';
import { ProductPageComponent } from '../../pages/product-page/product-page.component';
import { TopMenuSecondComponent } from '../../top-menu-second/top-menu-second.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopMenuSecondComponent,ProductPageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    NgxImageZoomModule,
    MatIconModule,
    // MatFormFieldModule,
    // BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    MatInputModule,

  ]
})
export class ProductPageModule { }
