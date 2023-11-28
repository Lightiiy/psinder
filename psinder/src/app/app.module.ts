import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { MapComponent } from './home/map/map.component';
import { HeroComponent } from './home/hero/hero.component';
import { GeolocationService } from './services/geolocation.services';
import { PostComponent } from './forum/post/post.component';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ForumComponent,
    MapComponent,
    HeroComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
