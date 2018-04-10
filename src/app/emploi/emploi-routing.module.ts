
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploiComponent } from './emploi.component';


const routes: Routes = [
  {
    path: '',
     component: EmploiComponent,
    data: {
      title: 'Emploi'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiRoutingModule { }
export const routedComponents = [EmploiComponent];