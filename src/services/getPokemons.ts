import type { PokemonCard, PokemonPage } from "@/interface";

export const getPokemons = async (): Promise[] => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=42");
  
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
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    };

  } catch (error) {
    console.error(error);
    return null;
  }
};