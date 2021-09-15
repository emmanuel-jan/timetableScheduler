import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardnavComponent } from './dashboardnav/dashboardnav.component';
import { DashcontentComponent } from './dashcontent/dashcontent.component';
import { CoursesComponent } from './courses/courses.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TimeintervalComponent } from './timeinterval/timeinterval.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardnavComponent,
    DashcontentComponent,
    CoursesComponent,
    RoomsComponent,
    TimeintervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
