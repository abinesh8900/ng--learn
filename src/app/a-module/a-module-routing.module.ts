import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AModuleComponent } from './a-module.component';

const routes: Routes = [{ path: '', component: AModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AModuleRoutingModule { }
