
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent } from './enseignant.component';



const routes: Routes = [
  {
    path: '',
     component: EnseignantComponent,
    data: {
      title: 'Enseignant'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnseignantRoutingModule { }
export const routedComponents = [EnseignantComponent];