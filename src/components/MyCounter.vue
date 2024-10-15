<template>
    <section>
        <h3> Counter: {{ counter }}</h3>
        <h3> Square: {{ squareCounter }}</h3>
        <h4>{{ text }}</h4>
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// Interfaz para las propiedades, tiene una propiedad 'value' de tipo número y propiedad 'text' de tipo string
interface Props {
    value: number;
    text: string;
}

// Define las propiedades del componente usando la interfaz
const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>