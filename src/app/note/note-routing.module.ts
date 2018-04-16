import { NoteComponent } from './note.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






const routes: Routes = [
  {
    path: '',
     component: NoteComponent,
    data: {
      title: 'Note'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule { }
export const routedComponents = [NoteComponent];