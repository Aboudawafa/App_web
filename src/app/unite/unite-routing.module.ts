
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniteComponent } from './unite.component';

const routes: Routes = [
  {
    path: '',
     component: UniteComponent,
    data: {
      title: 'Unite'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniteRoutingModule { }
export const routedComponents = [UniteComponent];