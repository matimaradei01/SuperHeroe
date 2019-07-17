import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ HeroesService } from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  
  id:number;
  heroe: any = {};

  constructor(private _heroeService : HeroesService, 
    private activatedRoute : ActivatedRoute ) {}
    
    ngOnit(){
      this.id = this.activatedRoute.snapshot.paramMap.get();
    }
     
}
