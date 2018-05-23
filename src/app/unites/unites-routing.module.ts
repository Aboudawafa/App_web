
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitesComponent } from './unites.component';

const routes: Routes = [
  {
    path: '',
     component: UnitesComponent,
    data: {
      title: 'Unites'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitesRoutingModule { }
export const routedComponents = [UnitesComponent];