import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { NewUsersComponent } from './new-users/new-users.component';

import {ChartModule} from 'primeng/chart';
import { PageViewsComponent } from './page-views/page-views.component';
import { PlatformActivityComponent } from './platform-activity/platform-activity.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnalyticsPageComponent,
    NewUsersComponent,
    PageViewsComponent,
    PlatformActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
