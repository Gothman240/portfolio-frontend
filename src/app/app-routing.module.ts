import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './website/components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './website/components/educacion/new-educacion/new-educacion.component';
import { EditExpComponent } from './website/components/experiencia/edit-exp/edit-exp.component';
import { NewExperienciaComponent } from './website/components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './website/components/home/home.component';
import { LoginComponent } from './website/components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExpComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
