
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiveauxComponent } from './niveaux.component';





const routes: Routes = [
  {
    path: '',
     component: NiveauxComponent,
    data: {
      title: 'Niveaux'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiveauxRoutingModule { }
export const routedComponents = [NiveauxComponent];