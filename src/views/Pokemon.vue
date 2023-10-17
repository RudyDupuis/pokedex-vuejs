<template>
    <header class="df-aic-jcsb little-section">
        <router-link to="/"><h2 class="light-20px">Pokedex</h2></router-link>
        <router-link to="/"><img src="../assets/img/go-back.svg" alt="arrow go back" /></router-link>
      </header>
      <main>
      <div v-if="pokemon">
        <h3>{{ pokemon.name }}</h3>
        <p>Number: {{ pokemon.number }}</p>
        <p>Types: {{ pokemon.types.join(', ') }}</p>
        <p>Weight: {{ pokemon.weight }}</p>
        <p>Height: {{ pokemon.height }}</p>
        <p>HP: {{ pokemon.hp }}</p>
        <p>Attack: {{ pokemon.attack }}</p>
        <p>Defense: {{ pokemon.defense }}</p>
        <p>Special Attack: {{ pokemon.specialAttack }}</p>
        <p>Special Defense: {{ pokemon.specialDefense }}</p>
        <p>Speed: {{ pokemon.speed }}</p>
      </div>
      <div v-else>
        <p>Loading Pokémon data...</p>
      </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getPokemonById } from '@/services/getPokemons';
import { type PokemonPage } from '@/interface';

export default defineComponent({
  props: {
    id: String,
  },
  data() {
    return {
      pokemon: null as PokemonPage | null,
    };
  },
  async beforeMount() {
    if (this.id) {
      this.pokemon = await getPokemonById(Number(this.id));
    }
  },
});
</script>
