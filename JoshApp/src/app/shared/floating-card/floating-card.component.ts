import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Opinion, opiniones } from '../../interfaces/faQs.interface';

@Component({
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.css']
})
export class FloatingCardComponent implements OnInit {
  opinionActual:Opinion=opiniones[0];
  close:boolean=false;
  constructor() { 
    this.loading();
  }

  ngOnInit(): void {
    
  }
  
  loading(){
    let contador=1;
    interval(5000).subscribe(() => {
      this.opinionActual=opiniones[contador];
        contador++;
        if(contador==opiniones.length){
          contador=0;
        }
  });
  }

  closeCard(){
    this.close=true;
  }
  openCard(){
    this.close=false;
  }
}
