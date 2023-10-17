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
  hp : number;
  attack : number;
  defense : number;
  specialAttack : number;
  specialDefense : number;
  speed : number;
}