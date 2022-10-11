import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BModuleComponent } from './b-module.component';

const routes: Routes = [{ path: '', component: BModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BModuleRoutingModule { }
