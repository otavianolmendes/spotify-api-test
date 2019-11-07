import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './components/artist/artist.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ArtistComponent,
    CardComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    Router,
    ArtistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
