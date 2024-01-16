import { CommonParameters, NameAndUrl } from './pokemon.interface';

export interface PokemonGeneration extends CommonParameters {
  main_region: NameAndUrl;
  names: Name[];
  pokemon_species: NameAndUrl[];
  version_groups: NameAndUrl[];
  types: NameAndUrl[];
}

export interface Name {
  language: NameAndUrl;
  name: string;
}
