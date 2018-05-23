import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantComponent } from './etudiant.component';


const routes: Routes = [
  {
    path: '',
     component: EtudiantComponent,
    data: {
      title: 'Etudiant'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule { }

export const routedComponents = [EtudiantComponent];