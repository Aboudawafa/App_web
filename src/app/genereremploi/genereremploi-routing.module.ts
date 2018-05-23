import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenereremploiComponent } from './genereremploi.component';



const routes: Routes = [
  {
    path: '',
     component: GenereremploiComponent,
    data: {
      title: 'Genereremploi'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenereremploiRoutingModule { }

export const routedComponents = [GenereremploiComponent];