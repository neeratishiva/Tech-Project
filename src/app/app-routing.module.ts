import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashbordComponent } from './dashbord/dashbord.component';


const routes: Routes = [
  {path:"login", component:LogInComponent},
  {path:"dashbord", component:DashbordComponent},
  {path:"register", component:SignUpComponent},
  {path:"", component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
