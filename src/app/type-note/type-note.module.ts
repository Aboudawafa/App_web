import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { TypeNoteComponent } from './type-note.component';
import { TypeNoteRoutingModule } from './type-note-routing.module';


@NgModule({
  imports: [
      CommonModule,
      TypeNoteRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    TypeNoteComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class TypeNoteModule { }
