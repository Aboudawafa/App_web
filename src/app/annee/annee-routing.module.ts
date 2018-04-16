import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnneeComponent } from './annee.component';





const routes: Routes = [
  {
    path: '',
     component: AnneeComponent,
    data: {
      title: 'Annee'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnneeRoutingModule { }
export const routedComponents = [AnneeComponent];