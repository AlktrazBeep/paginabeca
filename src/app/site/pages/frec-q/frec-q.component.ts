import { Component, OnInit } from '@angular/core';
import { preguntasFrecuentes } from '../../../interfaces/faQs.interface';

@Component({
  selector: 'app-frec-q',
  templateUrl: './frec-q.component.html',
  styleUrls: ['./frec-q.component.css']
})
export class FrecQComponent implements OnInit {
preguntasFrecuentes=preguntasFrecuentes;


  constructor() { }

  ngOnInit(): void {
    
  }

}
