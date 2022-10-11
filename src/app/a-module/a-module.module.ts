import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AModuleRoutingModule } from './a-module-routing.module';
import { AModuleComponent } from './a-module.component';


@NgModule({
  declarations: [
    AModuleComponent
  ],
  imports: [
    CommonModule,
    AModuleRoutingModule
  ]
})
export class AModuleModule { }
