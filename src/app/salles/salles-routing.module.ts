
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SallesComponent } from './salles.component';

const routes: Routes = [
  {
    path: '',
     component: SallesComponent,
    data: {
      title: 'Salles'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallesRoutingModule { }
export const routedComponents = [SallesComponent];