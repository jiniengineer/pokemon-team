import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonApiService } from './services/pokemon-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generation: FormControl;

  constructor(private readonly api: PokemonApiService) {}

  ngOnInit() {
    this.generation = new FormControl('generation-i');
  }

  onPokemonSelect(name: string): void {
    this.api.setSelectedPokemon(name);
  }

  updateGeneration() {
    console.log('Selected Generation: ', this.generation.value);
    this.api.setSelectedGeneration(this.generation.value);
  }
}
