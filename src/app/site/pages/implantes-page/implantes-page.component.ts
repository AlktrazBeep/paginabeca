import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implantes-page',
  templateUrl: './implantes-page.component.html',
  styleUrls: ['./implantes-page.component.css']
})
export class ImplantesPageComponent implements OnInit {

  beneficios=[
    { beneficio:"Efectividad",justify:"Los implantes subdérmicos tienen una tasa de eficacia del 99%.",logo:"percent"},
    { beneficio:"Discreción",justify:"Los implantes subdérmicos son pequeños y discretos, por lo que no se notan una vez que están colocados.",logo:"check_small"},
    { beneficio:"Comodidad",justify:"Una vez colocados, los implantes subdérmicos no requieren ningún tipo de mantenimiento y no se sienten al usarlos.",logo:"auto_fix_high"},
    { beneficio:"Larga duración",justify:"Los implantes subdérmicos pueden durar hasta 3 años.",logo:"event_available"},
    { beneficio:"Reversibilidad",justify:"Una vez que se extraen los implantes subdérmicos, la fertilidad se recupera de manera inmediata.",logo:"settings_backup_restore"},
    { beneficio:"Amplio espectro de uso",justify:"Los implantes subdérmicos son adecuados para mujeres de todas las edades y en diferentes etapas de sus vidas, incluyendo mujeres que amamantan.",logo:"all_inclusive"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}