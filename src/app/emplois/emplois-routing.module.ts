
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploisComponent } from './emplois.component';



const routes: Routes = [
  {
    path: '',
     component: EmploisComponent,
    data: {
      title: 'Emplois'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploisRoutingModule { }
export const routedComponents = [EmploisComponent];