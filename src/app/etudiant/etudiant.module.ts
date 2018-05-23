import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'

import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from '../pages/content-pages/register/register-page.component';
import { EtudiantComponent } from './etudiant.component';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeSearch } from './filter.directive';
import { FilterByClass } from './filterbyclass';
@NgModule({
    imports: [
        CommonModule,
        EtudiantRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
        OrderModule,
    
    ],
    declarations: [
        EtudiantComponent,
    
       RegisterPageComponent,
       FilterPipeSearch,
       FilterByClass,
  
      
    ]
    ,
    entryComponents: [RegisterPageComponent],
    providers: [],
    bootstrap: []
})
export class EtudiantModule { }
