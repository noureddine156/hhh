import { Routes } from '@angular/router';
import path from 'path';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {MatToolbarModule} from '@angular/material/toolbar';


export const routes: Routes = [
{
    path:'acceuil',component:AcceuilComponent
},
{
    path:'inscription',component:InscriptionComponent
},
{
    path:'connexion',component:ConnexionComponent
},


];
