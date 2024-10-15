<template>
    <section>
        <h3> Counter: {{ counter }}</h3>
        <h3> Square: {{ squareCounter }}</h3>
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// Interfaz para las propiedades, en este caso, solo tiene una propiedad 'value' de tipo número
interface Props {
    value: number;
}

// Define las propiedades del componente sin una interfaz de TypeScript
/* const props = defineProps<{
    value: number
}>(); */

// Define las propiedades del componente usando la interfaz
const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>
