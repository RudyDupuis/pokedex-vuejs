<template>
    <p class="types">
        <span v-for="t in types"
        :class="{
          'normal': t === 'normal',
          'fire': t === 'fire',
          'water': t === 'water',
          'electric': t === 'electric',
          'grass': t === 'grass',
          'ice': t === 'ice',
          'fighting': t === 'fighting',
          'poison': t === 'poison',
          'ground': t === 'ground',
          'flying': t === 'flying',
          'psychic': t === 'psychic',
          'bug': t === 'bug',
          'rock': t === 'rock',
          'ghost': t === 'ghost',
          'dark': t === 'dark',
          'steel': t === 'steel',
          'fairy': t === 'fairy',
          'dragon': t === 'dragon',
        }"
      >{{ t }}</span>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        types: Array<String>,
    },
});
</script>