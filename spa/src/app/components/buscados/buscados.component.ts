import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from './../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
})
export class BuscadosComponent implements OnInit {

  heroesBuscados:any[] = [];
  termino : string;
  id:number;
  
  constructor(private _heroesService : HeroesService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroesBuscados = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroesBuscados);
    })
  }
}
