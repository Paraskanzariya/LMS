import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './auth/authentication.guard';
import { notAuthenticationGuard } from './auth/not-authentication.guard';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { BlankLayoutComponent } from './shared/layouts/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    // canActivate: [authenticationGuard],
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
      }
    ]
  },
  {
    path: 'auth',
    canActivate: [notAuthenticationGuard],
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
