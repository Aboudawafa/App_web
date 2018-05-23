import { DateTimePickerComponent } from './../../calendar/date-time-picker.component';
import { Enseignant } from './enseignant';
import { Matiere } from './matiere';
import { Classe } from './classe';
import { Annee } from './annee';
import { Salle } from './salle';
import { Time } from '@angular/common';
export class Seance {
    id:number;
    date_debut:Date;
    date_fin:Date;
    matiere:Matiere;
    classe :Classe;
    salle:Salle;
    annee :Annee;
    enseignant:Enseignant;
    jour:string;
    selected:boolean;
}
