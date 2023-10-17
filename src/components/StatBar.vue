<template>
    <div class="stat-bar">
        <div class="stat-bar__value" :style="{ width: (stat * 255 / 200) + 'px' }"></div>
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