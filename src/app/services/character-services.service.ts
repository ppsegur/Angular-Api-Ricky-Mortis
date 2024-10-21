import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterResponse } from '../interfaces/Character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharacterServicesService {

  constructor(private http:HttpClient) { }
  
  getCharacters():Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>("https://rickandmortyapi.com/api/character");

  }
}
