import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {LoginGuard} from '../core/auth/login.guard';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SigninComponent,
        canActivate: [LoginGuard],
        data: {
          title: 'Alurapic - Sign in'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Alurapic - Sign up'
        }
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
