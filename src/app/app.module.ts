import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // @angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    // feature dashboard module
    DashboardModule,
    HeroesModule,

    //app
    AppRoutingModule,
    CoreModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
