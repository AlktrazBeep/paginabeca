import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventajas-implantes-sub',
  templateUrl: './ventajas-implantes-sub.component.html',
  styleUrls: ['./ventajas-implantes-sub.component.css']
})
export class VentajasImplantesSubComponent implements OnInit {
  ventajas=[
    {vent:"Protección anticonceptiva constante: los implantes subdérmicos proporcionan protección constante contra el embarazo, ya que no requieren ningún tipo de acción por parte de la usuaria."},
    {vent:"Fácil de usar: los implantes subdérmicos son fáciles de insertar y no requieren ningún tipo de mantenimiento."},
    {vent:"Discreción: los implantes subdérmicos son discretos y no se notan bajo la ropa, lo que significa que no tienen que preocuparse por que alguien sepa que están usando anticonceptivos."},
    {vent:"Alta efectividad: los implantes subdérmicos son altamente efectivos en la prevención del embarazo, con una tasa de fallo del 0,05%."},
    {vent:"Sin interrupciones en la actividad sexual: los implantes subdérmicos no requieren interrupciones en la actividad sexual, como es el caso con otros métodos anticonceptivos."},
    {vent:"Sin efectos secundarios hormonales: los implantes subdérmicos no tienen efectos secundarios hormonales, como los cambios de humor o el aumento de peso."},
    {vent:"Reversibilidad: los implantes subdérmicos son completamente reversibles, lo que significa que la fertilidad se recupera después de que se retire el implante."},
    {vent:"Fácil de remover: los implantes subdérmicos son fáciles de remover en cualquier momento si se desea interrumpir su uso."},
    {vent:"Sin interacción con otros medicamentos: los implantes subdérmicos no interactúan con otros medicamentos, lo que significa que pueden usarse con seguridad junto con otros tratamientos."},
    {vent:"Costo efectivo a largo plazo: los implantes subdérmicos son una opción costo efectiva a largo plazo, ya que su protección dura varios años."},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
