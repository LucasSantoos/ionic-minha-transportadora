import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'caminhoes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'caminhoes',
    loadChildren: () => import('./caminhoes/caminhoes.module').then( m => m.CaminhoesPageModule)
  },
  {
    path: 'motoristas',
    loadChildren: () => import('./motoristas/motoristas.module').then( m => m.MotoristasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
