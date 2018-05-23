import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { EnseignantsComponent } from './enseignants.component';
import { EnseignantsRoutingModule } from './enseignants-routing.module';

@NgModule({
  imports: [
      CommonModule,
      EnseignantsRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    EnseignantsComponent,
   /* EnseignantComponent,*/

    
  ],
 /* entryComponents: [EnseignantComponent],*/
  providers: [],
  bootstrap: []
})
export class EnseignantsModule { }
