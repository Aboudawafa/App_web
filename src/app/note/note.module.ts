
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';


@NgModule({
  imports: [
      CommonModule,
      NoteRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    NoteComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class NoteModule { }
