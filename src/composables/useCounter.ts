import { ref, computed } from "vue";

export const useCounter = (initialValue: number = 5) => {
    const counter = ref(initialValue);
    const squareCounter = computed(() => counter.value * counter.value);
    return {
        counter,
        // Variables de solo lectura Read-only
        squareCounter
    }
}