import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalisisService } from '../../services/analisis.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formData: FormData = new FormData();
  
  analisisForm = this._formBuilder.group({
    tipo: ['', Validators.required],    
    archivo: ['', Validators.required],    
  });

  constructor(
    private _router: Router,
    private _formBuilder: UntypedFormBuilder,
    private _analisisService: AnalisisService
  ) { }

  ngOnInit(): void {
  }

  analizar(){
    console.log(this.formData.get('tipo'));
    console.log(this.formData.get('file'));
    this._analisisService.enviarArchivo(this.formData)
    .subscribe(r =>{
      //this.pandasTabla = r[0];
      console.log(r);
      this.formData.set('vuelta', '2')
      this._analisisService.enviarArchivo(this.formData)
      .subscribe(q =>{
        console.log(q)
        this._analisisService.guardarDatos([r, q]);
        this._router.navigate(['mining/resultados']);
      });
    });
  }

  onFileChange(event: any){
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
      this.formData = new FormData();
      this.formData.append('file', file);
      this.formData.append('tipo', this.analisisForm.value.tipo);
      this.formData.append('vuelta', '1');
    }
  }

}
