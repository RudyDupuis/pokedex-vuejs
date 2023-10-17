<template>
    <header class="df-aic-jcsb little-section little-section-mc">
      <h2 class="light-20px">Pokedex</h2>
      <input type="text" placeholder="Name or number" />
    </header>

    <main class="df-alc-jcc pt32px">
      <section class="grid" v-if="pokemons">
          <router-link  v-for="p in pokemons" :key="p.number" :to="'pokemon/' + p.number">
            <div class="card df-fdc-aic-jcse">
              <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.number + '.png'" :alt="p.name" />
              <p class="card__number">N° {{ p.number }}</p>
              <p>{{ p.name }}</p>
            </div>
          </router-link>
      </section>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onBeforeMount } from "vue";
  import { type PokemonCard } from "@/interface";
  import { getPokemons } from "@/services/getPokemons";
  
  export default defineComponent({
    data() {
      return {
        pokemons: null as PokemonCard[] | null,
      };
    },
    async beforeMount() {
        this.pokemons = await getPokemons();
    },
  });
  </script>
  