import { HeroesService } from './../../services/heroes.service';
import { HeroeModel } from './../../models/heroe.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroeService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('formulario no valido');
      return;
    }

    if ( this.heroe.id ) {
      this.heroeService.actualizarHeroe( this.heroe )
    .subscribe( resp => {
      console.log(resp);
    });
    }else {
      this.heroeService.crearHeroe( this.heroe )
    .subscribe( resp => {
      console.log(resp);
      this.heroe = resp;
    });
    }
  }
}
