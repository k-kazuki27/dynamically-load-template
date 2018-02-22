import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadTemplateComponent } from './load-template.component';

const routes: Routes = [
  {
    path: '',
    component: LoadTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadTemplateRoutingModule { }
