import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mining',
    pathMatch: 'full'
  },
  {
  path: 'mining',
  component: PrincipalComponent,
  children: [
    {
      path: '',
      component: FormularioComponent,
    },
    {
      path: 'resultados',
      component: ResultadosComponent
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
