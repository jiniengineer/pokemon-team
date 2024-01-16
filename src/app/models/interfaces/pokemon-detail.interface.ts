import { CommonParameters, NameAndUrl } from './pokemon.interface';

export interface PokemonDetailResponse extends CommonParameters {
  base_experience: number;
  forms: NameAndUrl[];
  game_indices: any[]; // To Do - Create an interface for this as well
  height: number;
  held_items: any[]; // To Do - Create an interface for this as well
  is_default: boolean;
  location_area_encounters: string;
  order: number;
  past_abilities: any[]; // To Do - Create an interface for this as well
  past_types: any[]; // To Do - Create an interface for this as well
  species: NameAndUrl;
  sprites: Sprite;
  stats: any[]; // To Do - Create an interface for this as well
  types: Type[];
  weight: number;
}

export interface PokemonDetail {
  sprites: Sprite;
  types: string[];
  name: string;
}

export interface Type {
  slot: number;
  type: NameAndUrl;
}

export interface Sprite {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: any;
  versions: any;
}
