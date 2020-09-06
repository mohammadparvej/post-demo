// Angular 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '',
     loadChildren: () => import('./modules/Authentication/authentication.module').then(m => m.AuthenticationModule) 
   },
   {
    path: '',
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
    }, 
   {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
