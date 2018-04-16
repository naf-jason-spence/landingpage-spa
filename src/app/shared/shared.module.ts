import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { LeadformComponent } from './leadform/leadform.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    LeadformComponent
  ],
  exports: [
    LoaderComponent,
    LeadformComponent
  ]
})
export class SharedModule { }
