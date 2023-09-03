<script setup lang="ts">
import { usePokemonStore } from '@/store/pokemon'

const route = useRoute()
const pokemon = usePokemonStore()

const pokemonId: Ref<string> = ref(route.params.id)

pokemon.getDetail(pokemonId.value)
</script>

<template>
  <div class="container mx-auto py-10">
    <h1>ID 👉 {{ pokemonId }}</h1>
    <pre>
      {{ pokemon.detail }}
    </pre>
  </div>
</template>