import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {AddSuggestionComponent} from './pages/add-suggestion/add-suggestion.component';
import {ObjectPageComponent} from './pages/object-page/object-page.component';
import {AddServiceMerchandiseComponent} from './pages/add-service-merchandise/add-service-merchandise.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {OrdersComponent} from './pages/orders/orders.component';
import {AuthGuardService} from './_services/auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'signIn', component: LoginComponent },
  { path: 'signUp', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'type/:id', component: CatalogPageComponent, canActivate: [AuthGuardService]},
  { path: 'object/:id', component: ObjectPageComponent, canActivate: [AuthGuardService]},
  { path: 'addSuggestion/:id', component: AddSuggestionComponent, canActivate: [AuthGuardService], data: { roles: ['ROLE_SUPPLIER'] }},
  { path: 'shoppingCart/:id', component: ShoppingCartComponent , canActivate: [AuthGuardService], data: { roles: ['ROLE_CLIENT'] }},
  { path: 'addMerchandiseService', component: AddServiceMerchandiseComponent , canActivate: [AuthGuardService], data: { roles: ['ROLE_SUPPLIER'] }},
  { path: 'checkout/:id', component: CheckoutComponent , canActivate: [AuthGuardService], data: { roles: ['ROLE_CLIENT'] }},
  { path: 'orders', component: OrdersComponent , canActivate: [AuthGuardService], data: { roles: ['ROLE_ADMIN'] }},
  { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
