
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatiereComponent } from './matiere.component';




const routes: Routes = [
  {
    path: '',
     component: MatiereComponent,
    data: {
      title: 'Matiere'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatiereRoutingModule { }
export const routedComponents = [MatiereComponent];