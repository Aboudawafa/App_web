
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NoteinfosRoutingModule } from './noteinfos-routing.module';
import { NoteinfosComponent } from './noteinfos.component';


@NgModule({
  imports: [
      CommonModule,
      NoteinfosRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    NoteinfosComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class NoteinfosModule { }
