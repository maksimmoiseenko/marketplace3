import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'signUp', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'type/:id', component: CatalogPageComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
