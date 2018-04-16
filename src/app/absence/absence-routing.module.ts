import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceComponent } from './absence.component';




const routes: Routes = [
  {
    path: '',
     component: AbsenceComponent,
    data: {
      title: 'Absence'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsenceRoutingModule { }
export const routedComponents = [AbsenceComponent];