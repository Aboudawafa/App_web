
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddseanceComponent } from './addseance.component';




const routes: Routes = [
  {
    path: '',
     component: AddseanceComponent,
    data: {
      title: 'Addseance'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddseanceRoutingModule { }
export const routedComponents = [AddseanceComponent];