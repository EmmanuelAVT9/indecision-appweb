<template>
    <h1>Mi primera app</h1>
    <hr>
    <MyCounter :value="5" />
    <MyCounterScript :value="5" />
</template>

<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>
