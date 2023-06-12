import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemTwoComponent } from './pages/problem-two/problem-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/problem-2',
    pathMatch: 'full'
  },
  {
    path: 'problem-2',
    component: ProblemTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
