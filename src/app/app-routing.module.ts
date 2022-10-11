import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'a', loadChildren: () => import('./a-module/a-module.module').then(m => m.AModuleModule) },
  { path: 'b', loadChildren: () => import('./b-module/b-module.module').then(m => m.BModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
