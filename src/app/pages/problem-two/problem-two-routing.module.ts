import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemTwoComponent } from './components/problem-two/problem-two.component';

const routes: Routes = [
  {
    path: '',
    component: ProblemTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemTwoRoutingModule { }
