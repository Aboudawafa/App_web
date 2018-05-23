import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatieresComponent } from './matieres.component';
import { MatieresRoutingModule } from './matieres-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      MatieresRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
MatieresComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class MatieresModule { }
