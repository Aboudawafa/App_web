
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualiteComponent } from './actualite.component';



const routes: Routes = [
  {
    path: '',
     component: ActualiteComponent,
    data: {
      title: 'Actualite'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualiteRoutingModule { }
export const routedComponents = [ActualiteComponent];