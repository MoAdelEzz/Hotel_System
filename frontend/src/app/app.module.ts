import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { FormsModule } from '@angular/forms';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {HttpClientModule} from '@angular/common/http';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { FormHotelsComponent } from './form-hotels/form-hotels.component';
import { FormSubadminComponent } from './form-subadmin/form-subadmin.component';
import { MainAdmineComponent } from './main-admine/main-admine.component'
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { SubAdmineComponent } from './sub-admine/sub-admine.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminPanelComponent,
    UserPageComponent,
    HotelInfoComponent,
    AddHotelsComponent,
    FormHotelsComponent,
    FormSubadminComponent,
    MainAdmineComponent,
    ProfileAdminComponent,
    SubAdmineComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
