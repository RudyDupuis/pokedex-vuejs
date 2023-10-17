<template>
    <header class="df-aic-jcsb little-section">
        <router-link to="/"><h2 class="light-20px">Pokedex</h2></router-link>
        <router-link to="/"><img src="../assets/img/go-back.svg" alt="arrow go back" class="button" /></router-link>
      </header>

      <main>
      <section v-if="pokemon" class="df-alc-jcc pokemon-desc">
        <img :src="imgUrl + pokemon.number + '.png'" :alt="pokemon.name" class="pokemon-desc_img" />
        
        <div class="pokemon-desc_right">
            <div class="df-aic-jcsb pokemon-desc_right_name">
                <div>
                    <h3>{{ pokemon.name }}</h3>
                    <p>N°: {{ pokemon.number }}</p>
                </div>
                <button v-on:click="displayShiny()" class="button" ><img src="../assets/img/shiny.svg" alt="shiny" /></button>
            </div>
            <div class="pokemon-desc_right_desc">
                <div class="df-aic-jcsb">
                    <p>Types:</p>
                    <p>{{ pokemon.types.join(' ') }}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Weight:</p>
                    <p>{{ pokemon.weight }}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Height:</p>
                    <p>{{ pokemon.height}}</p>
                </div>    
            </div>
            <div class="pokemon-desc_right_stats">
                <div class="df-aic-jcsb">
                    <p>Hp:</p>
                    <p>{{ pokemon.hp}}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Attack</p>
                    <p>{{ pokemon.attack}}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Defense</p>
                    <p>{{ pokemon.defense}}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Special Attack:</p>
                    <p>{{ pokemon.specialAttack}}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Special Defense:</p>
                    <p>{{ pokemon.specialDefense}}</p>
                </div>
                <div class="df-aic-jcsb">
                    <p>Speed:</p>
                    <p>{{ pokemon.speed}}</p>
                </div>
            </div>
        </div>
      </section>

      <div v-else>
        <p>Loading Pokémon data...</p>
      </div>

    </main>

    <footer v-if="pokemon" class="df-aic-jcsb little-section">
        <img src="../assets/img/go-before.svg" alt="arrow go before" class="button" v-on:click="changePokemon(pokemon.number - 1)" v-if="pokemon.number - 1 != 0"/>
        <img src="../assets/img/go-after.svg" alt="arrow go after" class="button"  v-on:click="changePokemon(pokemon.number + 1)" />
    </footer>
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
            imgUrlBase: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/', 
            imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/',
        };
    },
    methods: {
        async changePokemon (id : number) {
            this.pokemon = await getPokemonById(id);
            this.imgUrl = this.imgUrlBase;
        },
        displayShiny() {
            if(this.imgUrl === this.imgUrlBase) {
                this.imgUrl = this.imgUrlBase + "shiny/"
            } else {
                this.imgUrl = this.imgUrlBase
            }
        }
    },
    async beforeMount() {
        if (this.id) {
            this.pokemon = await getPokemonById(Number(this.id));
        }
    },
});
</script>
