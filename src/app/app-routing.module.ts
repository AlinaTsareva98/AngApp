import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InpstudentComponent } from './inpstudent/inpstudent.component';
import { StlistComponent } from './stlist/stlist.component';

const routes: Routes = [
  {path: 'student', loadChildren: () => import('./inpstudent/inpstudent.component').then(m => m.InpstudentComponent)},
  {path: 'list', component: StlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
