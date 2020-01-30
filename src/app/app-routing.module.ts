import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NotHomeComponent} from './not-home/not-home.component';

/**
 *  Je hebt 2 of meerdere router outlets, 1 zonder naam (de primary), en 1 of meer met naam (Auxiliary router outlets)
 *
 *  Bij primary routes hoef je geen outlet property mee te geven in de routes hieronder, bij de aux wel.
 */

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'not-home', component: NotHomeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    outlet: 'secondary'
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'secondary'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
