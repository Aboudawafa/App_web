import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseComponent } from './classe.component';
import { ClasseRoutingModule } from './classe-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      ClasseRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
ClasseComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class ClasseModule { }
