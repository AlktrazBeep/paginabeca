import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './site/pages/home/home.component';
import { PricesComponent } from './site/pages/prices/prices.component';
import { SendMsjComponent } from './site/pages/send-msj/send-msj.component';
import { FrecQComponent } from './site/pages/frec-q/frec-q.component';
import { MitosImplantesSubComponent } from './site/pages/mitos-implantes-sub/mitos-implantes-sub.component';
import { VentajasImplantesSubComponent } from './site/pages/ventajas-implantes-sub/ventajas-implantes-sub.component';


const routes:Routes=[
  { path:'', component: HomeComponent, pathMatch:'full'},
  // { path:'send-msj', component: SendMsjComponent},
  { path:'prices', component: PricesComponent},
  { path:'faqs-implanon', component: FrecQComponent},
  { path:'mitos-implantes-sub', component: MitosImplantesSubComponent},
  { path:'ventajas-implantes-sub', component: VentajasImplantesSubComponent},

  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
