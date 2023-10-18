export interface PokemonCard {
    name: string;
    number: number;
  }

export interface PokemonPage {
  name: string;
  number: number;
  types : string[];
  weight: number;
  height: number;
  stats : Stats;
}

export interface Stats {
    hp : number;
    attack : number;
    defense : number;
    'special-attack' : number;
    'special-defense' : number;
    speed : number;
}