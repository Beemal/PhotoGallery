import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AlertModule } from 'ng2-bootstrap';

import {NavbarComponent} from './navbar/navbar.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageService} from './image/shared/image.service';
import {ImageFilterPipe} from './image/shared/filter.pipe';
import {ImageDetailComponent} from "./image/image-detail.component";

import { AppComponent } from './app.component';
import { appRoutes } from '../route';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, GalleryComponent, ImageFilterPipe, ImageDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AlertModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
