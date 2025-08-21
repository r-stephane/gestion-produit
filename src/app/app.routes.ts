import { Routes } from '@angular/router';
import { Index } from './produit/index';
import { Read } from './produit/read/read';
import { Update } from './produit/update/update';
import { Delete } from './produit/delete/delete';
import { Create } from './produit/create/create';

export const routes: Routes = [
    { path:'produit',component: Index },
    { path:'produit/create',component: Create },
    { path:'produit/read/:produitId',component: Read },
    { path:'produit/edit',component: Update  },
    { path:'produit/delete',component: Delete },
    { path:'**', redirectTo: 'produit' },

];