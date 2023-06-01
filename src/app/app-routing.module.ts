import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: DefaultLayoutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'pricing', component: PricingComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
