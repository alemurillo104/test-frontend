import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/problem-2',
    pathMatch: 'full'
  },
  // {
  //   path: 'problem-2',
  //   component: ProblemTwoComponent
  // },
  {
    path: 'problem-2',
    loadChildren: () => import('./pages/problem-two/problem-two.module').then(m => m.ProblemTwoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
