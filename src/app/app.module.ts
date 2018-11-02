import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SellerinfoComponent } from './sellerinfo/sellerinfo.component';
import { ChatComponent } from './chat/chat.component';
import { DicomComponent } from './dicom/dicom.component';
import { TemplateformComponent } from './templateform/templateform.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BranddesignComponent } from './branddesign/branddesign.component';
import { BranddesignDetailComponent } from './branddesign-detail/branddesign-detail.component';
import { MenudesignDetailComponent } from './menudesign-detail/menudesign-detail.component';
import { MenudesignComponent } from './menudesign/menudesign.component';
import { PhotographicComponent } from './photographic/photographic.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    Code404Component,
    ProductdetailComponent,
    SellerinfoComponent,
    ChatComponent,
    DicomComponent,
    TemplateformComponent,

    BranddesignComponent,
    BranddesignDetailComponent,
    MenudesignDetailComponent,
    MenudesignComponent,
    PhotographicComponent,
    TeamComponent,
    AboutComponent,
    MainComponent
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
