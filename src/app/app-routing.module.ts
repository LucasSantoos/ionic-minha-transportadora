import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'caminhoes',
    loadChildren: () => import('./caminhoes/caminhoes.module').then( m => m.CaminhoesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'motoristas',
    loadChildren: () => import('./motoristas/motoristas.module').then( m => m.MotoristasPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'cargas',
    loadChildren: () => import('./cargas/cargas.module').then( m => m.CargasPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'transporte',
    loadChildren: () => import('./transporte/transporte.module').then( m => m.TransportePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule),
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
