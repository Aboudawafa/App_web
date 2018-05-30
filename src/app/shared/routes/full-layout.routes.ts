import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarsModule'
  },
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsNg2Module'
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  },
  {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  },
  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  },
  {
    path: 'datatables',
    loadChildren: './data-tables/data-tables.module#DataTablesModule'
  },
  {
    path: 'uikit',
    loadChildren: './ui-kit/ui-kit.module#UIKitModule'
  },
  {
    path: 'components',
    loadChildren: './components/ui-components.module#UIComponentsModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  },
  {
    path: 'colorpalettes',
    loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
  },
  
  {
    path: 'classe',
    loadChildren: './classe/classe.module#ClasseModule'
  },
  {
    path: 'classes',
    loadChildren: './classes/classes.module#ClassesModule'
  },
  {
    path: 'genereremploi',
    loadChildren: './genereremploi/genereremploi.module#GenereremploiModule'
  },
  {
    path: 'addseance',
    loadChildren: './addseance/addseance.module#AddseanceModule'
  },
  {
    path: 'salle',
    loadChildren: './salle/salle.module#SalleModule'
  },
  {
    path: 'paiement',
    loadChildren: './paiement/paiement.module#PaiementModule'
  },
  {
    path: 'salles',
    loadChildren: './salles/salles.module#SallesModule'
  },

  {
    path: 'etudiant',
    loadChildren: './etudiant/etudiant.module#EtudiantModule'
  },
  {
    path: 'enseignant',
    loadChildren: './enseignant/enseignant.module#EnseignantModule'
  },
  {
    path: 'matiere',
    loadChildren: './matiere/matiere.module#MatiereModule'
  },
  {
    path: 'matieres',
    loadChildren: './matieres/matieres.module#MatieresModule'
  },
  {
    path: 'enseignants',
    loadChildren: './enseignants/enseignants.module#EnseignantsModule'
  },
  {
    path: 'unite',
    loadChildren: './unite/unite.module#UniteModule'
  },

  {
    path: 'unites',
    loadChildren: './unites/unites.module#UnitesModule'
  },
  {
    path: 'emplois',
    loadChildren: './emplois/emplois.module#EmploisModule'
  },
  {
    path: 'actualite',
    loadChildren: './actualite/actualite.module#ActualiteModule'
  },
  {
    path: 'actualites',
    loadChildren: './actualites/actualites.module#ActualitesModule'
  },
  {
    path: 'absence',
    loadChildren: './absence/absence.module#AbsenceModule'
  },
  {
    path: 'niveau',
    loadChildren: './niveau/niveau.module#NiveauModule'
  },
  {
    path: 'consulteract',
    loadChildren: './consulteract/consulteract.module#ConsulteractModule'
  },
  {
    path: 'note',
    loadChildren: './note/note.module#NoteModule'
  },
  {
    path: 'niveaux',
    loadChildren: './niveaux/niveaux.module#NiveauxModule'
  },
  {
    path: 'noteinfo',
    loadChildren: './noteinfo/noteinfo.module#NoteinfoModule'
  },
  {
    path: 'noteinfos',
    loadChildren: './noteinfos/noteinfos.module#NoteinfosModule'
  },
];