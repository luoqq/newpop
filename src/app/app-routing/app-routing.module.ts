import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule } from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ProductComponent} from "../product/product.component";
import {Code404Component} from "../code404/code404.component";
import {ProductdetailComponent} from "../productdetail/productdetail.component";
import {SellerinfoComponent} from "../sellerinfo/sellerinfo.component";
import {ChatComponent} from "../chat/chat.component";
import {LoginGuard} from "../guard/login-guard";
import {DicomComponent} from "../dicom/dicom.component";
import {PhotographicComponent} from "../photographic/photographic.component";
import {MenudesignComponent} from "../menudesign/menudesign.component";
import {BranddesignComponent} from "../branddesign/branddesign.component";
import {AboutComponent} from "../about/about.component";
import {TeamComponent} from "../team/team.component";

const routes:Routes = [
  {path:'', redirectTo:"/home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'branddesign',component:BranddesignComponent},
  {path:'menudesign',component:MenudesignComponent},
  {path:'photographic',component:PhotographicComponent},
  {path:'team',component:TeamComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:Code404Component}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[LoginGuard],
  declarations: []
})
export class AppRoutingModule { }
