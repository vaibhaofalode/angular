import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from  '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './homepage/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserDetailsComponent,
    NavbarComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'movies',
        component: HomepageComponent
     },
     {
      path: 'users/register',
      component: RegisterComponent
     },
     {
      path: 'users/login',
      component: LoginComponent
     },
     {
      path: 'users/:userId',
      component: UserDetailsComponent
     },
     {
      path: 'movie/:movieId',
      component: MovieDetailsComponent
     }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
