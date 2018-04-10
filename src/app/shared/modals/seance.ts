import { Matiere } from './matiere';
import { Classe } from './classe';
import { Annee } from './annee';
import { Salle } from './salle';
export class Seance {
    id:number;
    date_debut:string;
    date_fin:string;
    matiere:Matiere;
    classe :Classe;
    salle:Salle;
    annee :Annee;
    selected:boolean;
}