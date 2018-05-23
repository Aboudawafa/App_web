import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { EnseignantComponent } from './enseignant.component';
import { EnseignantRoutingModule } from './enseignant-routing.module';
@NgModule({
  imports: [
      CommonModule,
      EnseignantRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    EnseignantComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class EnseignantModule { }
