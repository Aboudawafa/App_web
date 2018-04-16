
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseComponent } from './classe.component';




const routes: Routes = [
  {
    path: '',
     component: ClasseComponent,
    data: {
      title: 'Classe'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasseRoutingModule { }
export const routedComponents = [ClasseComponent];