
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialiteComponent } from './specialite.component';

const routes: Routes = [
  {
    path: '',
     component: SpecialiteComponent,
    data: {
      title: 'Specialite'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialiteRoutingModule { }
export const routedComponents = [SpecialiteComponent];