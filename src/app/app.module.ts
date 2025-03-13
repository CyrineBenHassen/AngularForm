import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NomFormComponent } from './nom-form/nom-form.component';
import { MonForm2Component } from './mon-form2/mon-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProfileComponent,
    HeaderComponent,
    UserComponent,
    NomFormComponent,
    MonForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
