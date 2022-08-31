import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters:any;

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }
  getCharacters(actualPage:any){
    this.charactersService.getCharacters(actualPage).subscribe((res: any) => {
      this.characters = res.data})
  }
  }

