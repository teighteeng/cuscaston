<script setup lang="ts">
import { usePokemonStore } from '@/store/pokemon'

const pokemon = usePokemonStore()

pokemon.clearDetail()
pokemon.getListing()

onBeforeMount(() => {
  // Called before mounting begins
})

onMounted(() => {
  // Called when component is mounted
})

onBeforeUnmount(() => {
  // Called before the Vue instance is destroyed
})

onUnmounted(() => {
  // Called after the instance is destroyed
})
</script>

<template>
  <div class="container mx-auto py-10">
    <h1>
      {{ $t('Pokemon') }}
    </h1>
    <ul>
      <li v-for="item in pokemon.list" class="border-b-2	last:border-0">
        <NuxtLink :to="`/pokemon/${item.id}`">
          <div class="px-2 py-4 hover:bg-gray-200">
            <h2>
              {{ item.name }}
            </h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>