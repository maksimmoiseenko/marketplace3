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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'signUp', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'type/:id', component: CatalogPageComponent},
  { path: 'object/:id', component: ObjectPageComponent},
  { path: 'addSuggestion/:id', component: AddSuggestionComponent},
  { path: 'shoppingCart/:id', component: ShoppingCartComponent },
  { path: 'addMerchandiseService', component: AddServiceMerchandiseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
