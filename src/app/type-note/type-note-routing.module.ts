
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeNoteComponent } from './type-note.component';

const routes: Routes = [
  {
    path: '',
     component: TypeNoteComponent,
    data: {
      title: 'TypeNote'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeNoteRoutingModule { }
export const routedComponents = [TypeNoteComponent];