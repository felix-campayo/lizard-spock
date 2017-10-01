import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardPageComponent } from '../pages/dashboard/dashboard.page';
import { PlayerComponent } from '../components/player/player.component';
import { TurnUtil } from '../util/turn.util';

@NgModule({
  declarations: [
    DashboardPageComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [ TurnUtil ],
  bootstrap: [DashboardPageComponent]
})
export class AppModule { }
