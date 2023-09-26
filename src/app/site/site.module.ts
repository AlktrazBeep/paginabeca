import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PricesComponent } from './pages/prices/prices.component';
import { SendMsjComponent } from './pages/send-msj/send-msj.component';
import { FrecQComponent } from './pages/frec-q/frec-q.component';
import { MitosImplantesSubComponent } from './pages/mitos-implantes-sub/mitos-implantes-sub.component';
import { VentajasImplantesSubComponent } from './pages/ventajas-implantes-sub/ventajas-implantes-sub.component';
import { FormsModule } from '@angular/forms';
import { ImplantesPageComponent } from './pages/implantes-page/implantes-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    PricesComponent,
    SendMsjComponent,
    FrecQComponent,
    MitosImplantesSubComponent,
    VentajasImplantesSubComponent,
    ImplantesPageComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SiteModule { }
