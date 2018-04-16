
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalleComponent } from './salle.component';

const routes: Routes = [
  {
    path: '',
     component: SalleComponent,
    data: {
      title: 'Salle'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalleRoutingModule { }
export const routedComponents = [SalleComponent];