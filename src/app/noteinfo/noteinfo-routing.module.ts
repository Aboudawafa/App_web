import { NoteinfoComponent } from './noteinfo.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






const routes: Routes = [
  {
    path: '',
     component: NoteinfoComponent,
    data: {
      title: 'Note'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteinfoRoutingModule { }
export const routedComponents = [NoteinfoComponent];