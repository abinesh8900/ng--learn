import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BModuleRoutingModule } from './b-module-routing.module';
import { BModuleComponent } from './b-module.component';


@NgModule({
  declarations: [
    BModuleComponent
  ],
  imports: [
    CommonModule,
    BModuleRoutingModule
  ]
})
export class BModuleModule { }
