import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatiereComponent } from './matiere.component';
import { MatiereRoutingModule } from './matiere-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      MatiereRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
MatiereComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class MatiereModule { }
