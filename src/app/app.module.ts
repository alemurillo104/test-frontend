import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemTwoModule } from './pages/problem-two/problem-two.module'
import { NavComponent } from './core/components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProblemTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
