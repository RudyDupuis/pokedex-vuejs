<template>
    <header class="df-aic-jcsb little-section little-section-mc">
      <h2 class="light-20px">Pokedex</h2>
      <input type="text" placeholder="Name or number" v-on:input="searchPokemon()" v-model="searchTerm" />
    </header>

    <main class="df-alc-jcc pt32px">
      <section class="grid" v-if="pokemons">
          <router-link  v-for="p in pokemons" :key="p.number" :to="'pokemon/' + p.number">
            <div class="card df-fdc-aic-jcse">
              <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.number + '.png'" :alt="p.name" />
              <p class="card__number">N° {{ p.number }}</p>
              <p>{{ capitalizeFirstLetter(replaceHyphensWithSpaces(p.name)) }}</p>
            </div>
          </router-link>
      </section>

      <div v-else>
        <div class="loader"></div>
      </div>
      
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { type PokemonCard } from "@/interface";
  import { getStartPokemons, searchPokemonByName, searchPokemonByNumber } from "@/services/getPokemons";

  import { capitalizeFirstLetter, replaceHyphensWithSpaces } from '@/filters';
  
  export default defineComponent({
    data() {
      return {
        pokemons: null as PokemonCard[] | null,
        searchTerm: "",
      };
    },
    methods : {
      async searchPokemon() {
        if(isNaN(Number(this.searchTerm))){
          this.pokemons = await searchPokemonByName(this.searchTerm);
        } else if (this.searchTerm === "") {
          this.pokemons = await getStartPokemons();
        } else {
          this.pokemons = await searchPokemonByNumber(this.searchTerm);
        }
      },
      capitalizeFirstLetter,
      replaceHyphensWithSpaces,
    },
    async beforeMount() {
        this.pokemons = await getStartPokemons();
    },
  });
  </script>
  