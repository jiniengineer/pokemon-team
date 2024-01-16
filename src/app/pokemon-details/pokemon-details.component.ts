import { Component, EventEmitter, Output } from '@angular/core';
import { TypeColors } from '../models/enums/type-colors.enum';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent {
  @Output() addedToTeam: EventEmitter<string> = new EventEmitter();
  readonly typeColors = TypeColors;
  details$ = this.api.pokemonDetails$;

  constructor(private readonly api: PokemonApiService) {}
}
