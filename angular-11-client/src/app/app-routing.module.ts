import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilkboxesListComponent } from './components/milkbox-list/milkboxes-list.component';
import { MilkboxDetailsComponent } from './components/milkbox-details/milkbox-details.component';
import { AddMilkBoxComponent } from './components/add-milkbox/add-milkbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'milkboxes', pathMatch: 'full' },
  { path: 'milkboxes', component: MilkboxesListComponent },
  { path: 'milkboxes/:id', component: MilkboxDetailsComponent },
  { path: 'add', component: AddMilkBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
