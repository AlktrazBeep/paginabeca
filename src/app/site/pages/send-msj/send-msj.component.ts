import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-msj',
  templateUrl: './send-msj.component.html',
  styleUrls: ['./send-msj.component.css']
})
export class SendMsjComponent implements OnInit {
  mensaje={
    name:"",
    email:"",
    number:"",
    msj:""
  };

  alert="";
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    if(this.mensaje.name!='' && this.mensaje.email!='' && this.mensaje.msj!='' ){
      this.alert="se envió tu mensaje";
    }else{
      this.alert="Los campos mensaje, email y nombre deben ir llenos";
    }
  }

}
