import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

// Imports for material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatToolbar,
  MatToolbarRow,
  MatRippleModule,
  MatBadgeModule,
  MatCardModule,
  MatSlideToggle
} from '@angular/material';
import { ICOsComponent } from './components/icos/icos.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatToolbar,
    MatToolbarRow,
    ICOsComponent,
    MatSlideToggle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    HttpClientModule,
    HttpModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
