import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { LoaderComponent } from './loader/loader.component';
import { LeadformComponent } from './leadform/leadform.component';

import { LeadformService } from './leadform/leadform.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    LoaderComponent,
    LeadformComponent
  ],
  exports: [
    LoaderComponent,
    LeadformComponent
  ],
  providers: [
    LeadformService
  ],
})
export class SharedModule { }