import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [

  // SignUpComponent
  { path:'sign-up', component: SignUpComponent },
  
  { path:'profile/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
