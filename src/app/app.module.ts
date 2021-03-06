import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FilterPipe } from '../app/components/dashboard/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { CourseComponent } from './components/admin/course/course.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { CourseListComponent } from './components/shared/bookings/bookings.component';
import { ChapterListComponent } from './components/shared/calendar/calendar.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';
import { ApiConnectionService } from './services/api-connection/api-connection.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyAccountComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings', component: CourseListComponent }, //courses
  { path: 'calendar', component: ChapterListComponent }, //bookings/:courseId
  { path: 'bookings/:courseId/:chapterId', component: ChapterQuestionsComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CourseComponent,
    UserListComponent,
    UserComponent,
    LoginComponent,
    HeroComponent,
    CourseListComponent,
    ChapterListComponent,
    MyAccountComponent,
    DashboardComponent,
    ChapterQuestionsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [ApiConnectionService],
  bootstrap: [AppComponent],
})

export class AppModule { }
