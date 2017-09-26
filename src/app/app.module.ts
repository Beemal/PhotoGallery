import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ng2-bootstrap';

import {NavbarComponent} from './navbar/navbar.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageService} from './image/shared/image.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, GalleryComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AlertModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
