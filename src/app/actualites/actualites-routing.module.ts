
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualitesComponent } from './actualites.component';



const routes: Routes = [
  {
    path: '',
     component: ActualitesComponent,
    data: {
      title: 'Actualites'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualitesRoutingModule { }
export const routedComponents = [ActualitesComponent];