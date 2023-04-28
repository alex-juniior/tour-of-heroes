import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DasboardingRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, FlexLayoutModule, MaterialModule, DasboardingRoutingModule
  ]
})
export class DashboardModule { }
