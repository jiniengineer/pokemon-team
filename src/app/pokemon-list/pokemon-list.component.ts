import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  pokemonSpecies$ = this.api.getPokemonSpecies$;

  private search$ = new Subject<string>();

  constructor(private api: PokemonApiService) {}

  ngOnInit(): void {
    this.search$
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((data) => this.api.setSearchQuery(data));
  }

  onSearch(searchQuery: string): void {
    this.search$.next(searchQuery);
  }

  onPokemonSelect(name: string): void {
    console.log('Selected Pokemon: ', name);
    this.api.setSelectedPokemon(name);
  }
}
