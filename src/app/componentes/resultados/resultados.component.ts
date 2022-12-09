import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalisisService } from '../../services/analisis.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  dimensiones: any
  tipoDatos: any
  faltantes: any
  pandasTabla: any
  imagenAMostrar: any

  constructor(
    private _analisisService: AnalisisService
  ) { }

  ngOnInit(): void {
    this._analisisService.datos$.subscribe(value =>{
      console.log(value);
      this.pandasTabla = value[0][0];
      this.dimensiones = value[0][1];
      this.tipoDatos = value[0][2];
      console.log(value[0][2]);
      console.log(this.tipoDatos);
      this.faltantes = value[0][3]
      let reader = new FileReader();
        reader.addEventListener("load", () => {
          this.imagenAMostrar = reader.result;
        }, false);

        if (value[1]) {
          reader.readAsDataURL(value[1]);
         }
    });
  }

}
