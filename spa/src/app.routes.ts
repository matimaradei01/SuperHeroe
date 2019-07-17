import { RouterModule , Routes, Router } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { HeroesComponent } from './app/components/heroes/heroes.component';
import { HeroeComponent } from './app/components/heroe/heroe.component';
import { BuscadosComponent } from './app/components/buscados/buscados.component';



const APP_ROUTES : Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, //SECUENCIAL
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:idx', component: HeroeComponent},
    { path: 'buscar/:termino', component: BuscadosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];//CUANDO NO HACE MATCH CON NINGUNA SE REDIRECCIONA CON HOME

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); //ASTERISCO, SEPARA... , {useHash:true}