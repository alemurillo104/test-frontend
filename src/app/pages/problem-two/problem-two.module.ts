import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemTwoRoutingModule } from './problem-two-routing.module';
import { ProblemTwoComponent } from './components/problem-two/problem-two.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProblemTwoComponent
  ],
  imports: [
    CommonModule,
    ProblemTwoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProblemTwoModule { }
