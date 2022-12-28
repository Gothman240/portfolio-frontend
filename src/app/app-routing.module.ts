import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExpComponent } from './website/components/experiencia/edit-exp/edit-exp.component';
import { NewExperienciaComponent } from './website/components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './website/components/home/home.component';
import { LoginComponent } from './website/components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
