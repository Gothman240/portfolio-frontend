import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './website/components/nav/nav.component';
import { HeroComponent } from './website/components/hero/hero.component';
import { AboutComponent } from './website/components/about/about.component';
import { ExperienciaComponent } from './website/components/experiencia/experiencia.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './website/components/skills/skills.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { MeComponent } from './website/components/me/me.component';
import { HomeComponent } from './website/components/home/home.component';
import { LoginComponent } from './website/components/login/login.component'
import { FormsModule } from '@angular/forms';
import { InterceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './website/components/experiencia/new-experiencia/new-experiencia.component';
import { EditExpComponent } from './website/components/experiencia/edit-exp/edit-exp.component';
import { EducacionComponent } from './website/components/educacion/educacion.component';
import { NewEducacionComponent } from './website/components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './website/components/educacion/edit-educacion/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ExperienciaComponent,
    SkillsComponent,
    FooterComponent,
    MeComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExpComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
