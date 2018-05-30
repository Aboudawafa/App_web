
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ConsulteractComponent } from './consulteract.component';




const routes: Routes = [
  {
    path: '',
     component: ConsulteractComponent,
    data: {
      title: ' Consulteract'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulteractRoutingModule { }
export const routedComponents = [ ConsulteractComponent];