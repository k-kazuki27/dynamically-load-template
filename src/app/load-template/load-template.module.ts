import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadTemplateRoutingModule } from './load-template-routing.module';
import { LoadTemplateComponent } from './load-template.component';
import { GetPageService } from '../services/get-page.service';

@NgModule({
  imports: [
    CommonModule,
    LoadTemplateRoutingModule
  ],
  declarations: [LoadTemplateComponent],
  providers: [GetPageService]
})
export class LoadTemplateModule { }
