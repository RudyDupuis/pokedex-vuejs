<template>
    <header class="df-aic-jcsb little-section">
        <h2 class="light-20px">Pokedex</h2>
        <router-link to="/"><goBack/></router-link>
      </header>

      <main>
      <section v-if="pokemon" class="df-alc-jcc pokemon-desc">
        <img :src="imgUrl + pokemon.number + '.png'" :alt="pokemon.name" class="pokemon-desc_img" />
        
        <div class="pokemon-desc_right">
            <div class="df-aic-jcsb pokemon-desc_right_name">
                <div>
                    <h3>{{ formatText(pokemon.name) }}</h3>
                    <p>N°: {{ pokemon.number }}</p>
                </div>
                <button v-on:click="displayShiny()" class="button" ><shiny :active="shinyActive"/></button>
            </div>
            <div class="pokemon-desc_right_desc">
                <div class="df-aic-jcsb pokemon-desc_right_desc--type">
                    <p>Types :</p>
                    <Type :types="pokemon.types"></Type>
                </div>
                <div class="df-aic-jcsb">
                    <p>Weight :</p>
                    <p>{{ (pokemon.weight * 0.1).toFixed(1) }} kg</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Height :</p>
                    <p>{{ (pokemon.height * 0.1).toFixed(1) }} m</p>
                </div>    
            </div>
            <div class="pokemon-desc_right_stats">
               <div v-for="(stat, key) in pokemon.stats" :key="key" class="df-aic-jcsb pokemon-desc_right_stats--stat">
                    <p>{{ formatText(key) }} :</p>
                    <StatBare :stat="stat"></StatBare>
                </div>
            </div>
        </div>
      </section>

      <div v-else>
        <div class="loader"></div>
      </div>

    </main>

    <footer v-if="pokemon" class="df-aic-jcsb little-section">
        <goBefore v-on:click="changePokemon(pokemon.number - 1)" v-if="pokemon.number - 1 != 0"/>
        <goAfter v-on:click="changePokemon(pokemon.number + 1)"/>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getPokemonById } from '@/services/getPokemons';
import { type PokemonPage } from '@/interface';

import Type from '@/components/Type.vue';
import StatBare from '@/components/StatBar.vue';

import goBack from '@/assets/img/goBack.vue';
import goBefore from '@/assets/img/goBefore.vue';
import goAfter from '@/assets/img/goAfter.vue';
import shiny from '@/assets/img/shiny.vue';

import { formatText } from '@/filters';

export default defineComponent({
    components: {
        Type,
        StatBare,
        goBack,
        goBefore,
        goAfter,
        shiny,
    },
    props: {
        id: String,
    },
    data() {
        return {
            pokemon: null as PokemonPage | null,
            imgUrlBase: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/', 
            imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/',
            shinyActive: false
        };
    },
    methods: {
        async changePokemon (id : number) {
            this.pokemon = await getPokemonById(id);
            this.imgUrl = this.imgUrlBase;
            this.shinyActive = false;
        },
        displayShiny() {
            if(this.imgUrl === this.imgUrlBase) {
                this.imgUrl = this.imgUrlBase + "shiny/";
                this.shinyActive = true;
            } else {
                this.imgUrl = this.imgUrlBase;
                this.shinyActive = false;
            }
        },
        formatText,
    },
    async beforeMount() {
        if (this.id) {
            this.pokemon = await getPokemonById(Number(this.id));
        }
    },
});
</script>
