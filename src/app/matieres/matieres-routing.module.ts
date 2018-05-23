
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatieresComponent } from './matieres.component';


const routes: Routes = [
  {
    path: '',
     component: MatieresComponent,
    data: {
      title: 'Matieres'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatieresRoutingModule { }
export const routedComponents = [MatieresComponent];