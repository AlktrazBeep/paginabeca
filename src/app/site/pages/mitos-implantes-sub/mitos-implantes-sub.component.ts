import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitos-implantes-sub',
  templateUrl: './mitos-implantes-sub.component.html',
  styleUrls: ['./mitos-implantes-sub.component.css']
})
export class MitosImplantesSubComponent implements OnInit {

  mitos=[
    {mito:"Una vez que se retira el implante, la fertilidad regresa a la normalidad.",title:"El implante subdérmico no causa infertilidad",
    img:"https://www.dexeus.com/blog/wp-content/uploads/2017/04/dexeus-blog-6-problemas-infertilidad.jpg"},
    {mito:"Los estudios han demostrado que no hay una relación entre el uso del implante y el cáncer de mama.",title:"El implante no aumenta el riesgo de cáncer de mama:",
    img:"https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2013/02/25/130225104818_estudios_replica_640x360_spl.jpg"},
    {mito:"El implante no tiene efecto sobre la libido o el deseo sexual.", title:"No afecta la libido",
    img:"https://www.psicologiathamar.com/wp-content/uploads/2020/09/reduce-libido-psicologia-2.jpg"},
    {mito:"El implante se coloca debajo de la piel y no es visible.",title:"El implante no es visible",
    img:"https://cdn2.salud180.com/sites/default/files/efectos_secundarios_implante.jpg"},
    {mito:"El implante no aumenta el riesgo de embarazo ectópico.",title:"El implante no causa embarazo ectópico",
    img:"https://www.reproduccionasistida.org/wp-content//embarazo-de-riesgo-que-es-670x285.png"},
    {mito:"El implante no tiene efecto sobre el peso corporal.",title:"El implante no aumenta el peso",
    img:"https://www.soycorredor.es/uploads/s1/42/83/92/5c6495c10de694da3b3495a6-como-calcular-el-imc.jpeg"},
    {mito:"Los dolores de cabeza no son un efecto secundario común del implante.",title:"El implante no causa dolores de cabeza",
    img:"https://saludconlupa.com/media/images/dolordecabezamujer_2686Mhj.2e16d0ba.fill-1800x945.jpg"},
    {mito:"El implante puede causar irregularidades en el ciclo menstrual pero esto es temporal.",title:"El implante no causa cambios en el ciclo menstrual",
    img:"https://www.dexeus.com/blog/wp-content/uploads/2022/11/ciclo-menstrual.jpg"},
    {mito:"Los problemas de salud relacionados con el implante son raros y generalmente leves.",title:"El implante no causa problemas de salud graves",
    img:"https://concepto.de/wp-content/uploads/2013/08/salud-OMS-e1551914081412.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
