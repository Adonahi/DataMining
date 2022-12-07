//Página principal de formulario (Parte lógica)
//Aquí se toma el archivo que el usuario haya escogido y con ayuda de
//analisis.service.ts se envía al backend (Django) para hacer todo el proceso
//de análisis con las bibliotecas de python

import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AnalisisService } from './services/analisis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataMining';

  formData: FormData = new FormData();
  pandas: any

  analisisForm = this._formBuilder.group({
    tipo: ['', Validators.required],    
    archivo: ['', Validators.required],    
  });

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _analisisService: AnalisisService
  ){}

  analizar(){
    console.log(this.formData.get('tipo'));
    console.log(this.formData.get('file'));
    this._analisisService.enviarArchivo(this.formData)
    .subscribe(r =>{
      this.pandas = r;
    });
  }

  onFileChange(event: any){
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
      this.formData = new FormData();
      this.formData.append('file', file);
      this.formData.append('tipo', this.analisisForm.value.tipo);
    }
  }

}

