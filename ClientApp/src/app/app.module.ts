import { NavMenuService } from './services/nav-menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavTogglerComponent } from './side-nav-toggler/side-nav-toggler.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginSignupCardComponent } from './login-signup-card/login-signup-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SignupFormComponent,
    LoginFormComponent,
    TopNavComponent,
    SideNavTogglerComponent,
    LayoutComponent,
    SideNavComponent,
    LoginSignupCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'sign-up', component: SignupFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'layout', component: LayoutComponent }
    ])
  ],
  providers: [
    NavMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
