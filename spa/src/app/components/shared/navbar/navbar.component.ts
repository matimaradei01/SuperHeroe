import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../../servicios/heroes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroesGuardados : Heroes [] = [];

  constructor(private _heroesService: HeroesService,
        private route:Router) { }

  ngOnInit() {
  }

  buscarHeroes(termino:string){
    this.route.navigate( ['/buscar',termino] );
    return false;
  }

}
