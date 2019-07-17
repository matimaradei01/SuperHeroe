import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroes } from '../../servicios/heroes.service' //IMPORTAR PARA PODER USAR

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];
  constructor(private _heroesService : HeroesService) { //PONERLO EN EL CONSTRUCTOR PARA PODER INTERCONECTAR CON HEROES.SERVICE.TS
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
}
