import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardnavComponent } from './dashboardnav/dashboardnav.component';
import { DashcontentComponent } from './dashcontent/dashcontent.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TimeintervalComponent } from './timeinterval/timeinterval.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardnavComponent,
    children:[
      {
        path: 'dashcontent',
        component: DashcontentComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'timeintervals',
        component: TimeintervalComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
