import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/Character.interfaces';
import { CharacterServicesService } from '../../services/character-services.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit {
  listCharacters :Character[]= [];

  constructor(private characterService:CharacterServicesService) { }
  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(respuesta=>{
      this.listCharacters = respuesta.results;
  })
}
}