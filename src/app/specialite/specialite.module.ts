import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { SpecialiteComponent } from './specialite.component';
import { SpecialiteRoutingModule } from './specialite-routing.module';

@NgModule({
  imports: [
      CommonModule,
      SpecialiteRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    SpecialiteComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class SpecialiteModule { }
