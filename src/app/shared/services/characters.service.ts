import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  
  getCharacters(actualPage:any){
    return this.http.get("https://api.disneyapi.dev/characters?page=" + actualPage);
  }
}
