import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'login', component: LoginPageComponent },
];
