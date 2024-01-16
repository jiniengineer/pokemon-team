import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  shareReplay,
  Subject,
  switchMap,
} from 'rxjs';
import {
  PokemonDetail,
  PokemonDetailResponse,
  PokemonGeneration,
} from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}
  private url = `https://pokeapi.co/api/v2`;

  private readonly selectedGeneration = new BehaviorSubject<string>(
    'generation-i'
  );
  selectedGeneration$ = this.selectedGeneration.asObservable();

  private readonly searchPokemonQuery = new BehaviorSubject<string>('');
  searchPokemonQuery$ = this.searchPokemonQuery.asObservable();

  private readonly selectedPokemon = new Subject<string>();
  selectedPokemon$ = this.selectedPokemon.asObservable();

  generationData$ = this.selectedGeneration$.pipe(
    switchMap((generationName) =>
      this.http.get<PokemonGeneration>(
        `${this.url}/generation/${generationName}`
      )
    )
  );

  pokemonDetails$ = this.selectedPokemon$.pipe(
    switchMap((pokemonName) =>
      this.http
        .get<PokemonDetailResponse>(`${this.url}/pokemon/${pokemonName}`)
        .pipe(
          map((response) => {
            return {
              sprites: response?.sprites,
              name: response?.name,
              types: response?.types.map((detailType) => detailType.type.name),
            } as PokemonDetail;
          })
        )
    ),
    shareReplay(1)
  );

  getPokemonSpecies$ = combineLatest([
    this.generationData$,
    this.searchPokemonQuery$,
  ]).pipe(
    map(([generation, searchQuery]) => {
      if (searchQuery && generation?.pokemon_species?.length) {
        return generation.pokemon_species.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        return generation?.pokemon_species;
      }
    }),
    shareReplay(1)
  );

  setSearchQuery(query: string): void {
    this.searchPokemonQuery.next(query);
  }

  setSelectedPokemon(pokemonName: string): void {
    console.log('Service - Selected Pokemon: ', pokemonName);
    this.selectedPokemon.next(pokemonName);
  }

  setSelectedGeneration(selectedGeneration: string): void {
    console.log('Service - Selected Generation: ', selectedGeneration);
    this.selectedGeneration.next(selectedGeneration);
  }
}
