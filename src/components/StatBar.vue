<template>
    <div class="stat-bar">
        <div class="stat-bar__value" :style="{ width: (stat * 200 / 255) + 'px' }"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        stat: Number,
    },
});
</script>