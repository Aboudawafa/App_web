import { NoteinfosComponent } from './noteinfos.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






const routes: Routes = [
  {
    path: '',
     component: NoteinfosComponent,
    data: {
      title: 'NoteInfos'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteinfosRoutingModule { }
export const routedComponents = [NoteinfosComponent];