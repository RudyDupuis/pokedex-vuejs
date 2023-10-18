import type { PokemonCard, PokemonPage } from "@/interface";

export const getStartPokemons = async (): Promise<PokemonCard[]> => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  
      const data = await response.json();
      const pokemons : PokemonCard[] = [];
  
      data.results.map((result: any) => {
        const pokemon: PokemonCard = {
          number: parseInt(result.url.split("/")[6]),
          name: result.name,
        };

        pokemons.push(pokemon);
      });
      
      return pokemons;
      
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export const getPokemonById = async (id: number): Promise<PokemonPage | null> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await response.json();

    return {
      name: data.name,
      number: data.id,
      types: data.types.map((type: any) => type.type.name),
      weight: data.weight,
      height: data.height,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        'special-attack': data.stats[3].base_stat,
        'special-defense': data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      }
    };

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchPokemonByName = async (partialName : string ):Promise<PokemonCard[]> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=905");

    const data = await response.json();
    const pokemons : PokemonCard[] = [];

    data.results
      .filter((result: any) => result.name.toLowerCase().includes(partialName.toLowerCase()))
      .map((result: any) => {
        const pokemon: PokemonCard = {
          number: parseInt(result.url.split("/")[6]),
          name: result.name,
        };

      pokemons.push(pokemon);
    });

    return pokemons;

  } catch (error) {
    console.error(error);
    return [];
  }
}

export const searchPokemonByNumber = async (number: string ):Promise<PokemonCard[]> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);

    const data = await response.json();
    const pokemons : PokemonCard[] = [];

    const pokemon: PokemonCard = {
      number: data.id,
      name: data.name,
    };

    pokemons.push(pokemon);

    return pokemons;

  } catch (error) {
    console.error(error);
    return [];
  }
}