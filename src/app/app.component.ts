//Página principal de formulario (Parte lógica)
//Aquí se toma el archivo que el usuario haya escogido y con ayuda de
//analisis.service.ts se envía al backend (Django) para hacer todo el proceso
//de análisis con las bibliotecas de python

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataMining';

  constructor(
  ){}

  

}

