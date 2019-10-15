import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes , RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component'

const approute: Routes = [
  { path:'' , component:HomeComponent },
  { path:'calculator' , component: CalculatorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
