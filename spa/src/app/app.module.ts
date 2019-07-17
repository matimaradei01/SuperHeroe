import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Servicios
import { HeroesService } from './servicios/heroes.service'
//Rutas
import { APP_ROUTING } from '../app.routes'
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadosComponent } from './components/buscados/buscados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,

  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
