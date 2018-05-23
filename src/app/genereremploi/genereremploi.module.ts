
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { GenereremploiRoutingModule } from './genereremploi-routing.module';

import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import {DayPilot, DayPilotModule} from "daypilot-pro-angular";
import { GenereremploiComponent } from './genereremploi.component';


@NgModule({
    imports: [
        CommonModule,
        GenereremploiRoutingModule,
        FormsModule,
        DayPilotModule
    ],
    declarations: [
        GenereremploiComponent
    ]
})
export class GenereremploiModule { }
