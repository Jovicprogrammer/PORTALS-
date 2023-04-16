import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeathComponent } from './death/death.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "DEATH", component: DeathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
