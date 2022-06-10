import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GlossaryComponent } from './components/glossary/glossary.component';
import { AddTermComponent } from './components/add-term/add-term.component';
import { RemoveTermComponent } from './components/remove-term/remove-term.component';

const routes: Routes = [{
  path: 'addTerm',
  component: AddTermComponent
}, {
  path: 'addTerm/:id',
  component: AddTermComponent
}, {
  path: 'removeTerm/:id',
  component: RemoveTermComponent
}, {
  path: '',
  component: GlossaryComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
