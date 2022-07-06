import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { SecondHeaderComponent } from './components/second-header/second-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import {TypesComponent} from './components/types/types.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { ObjectPageComponent } from './pages/object-page/object-page.component';
import { AddSuggestionComponent } from './pages/add-suggestion/add-suggestion.component';
import { AddServiceMerchandiseComponent } from './pages/add-service-merchandise/add-service-merchandise.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    SecondHeaderComponent,
    FooterComponent,
    TypesComponent,
    CatalogPageComponent,
    CardComponent,
    FilterComponent,
    ShoppingCartComponent,
    SuggestionComponent,
    SuggestionsComponent,
    ObjectPageComponent,
    AddSuggestionComponent,
    AddServiceMerchandiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
