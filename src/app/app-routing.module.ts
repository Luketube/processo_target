import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';

export const routes: Routes = [
  {path: '', redirectTo: 'formulario', pathMatch: 'full'},
  {path: 'formulario', component: FormularioComponent},
  {path: 'tabela', component: TabelaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
