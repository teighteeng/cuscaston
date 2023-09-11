<script setup lang="ts">

interface Menu {
  routePath: string,
  name: string,
}

const { t } = useI18n()

// @ts-ignore
const menus: Ref<Menu[]> = ref([
  {
    routePath: '/',
    name: t('Home'),
  },
  {
    routePath: '/about',
    name: t('About'),
  },
])
</script>

<template>
  <header
    class="flex items-center justify-between fixed z-50 px-4 py-2 w-full h-header-s lg:h-header-lg shadow-md bg-white">
    <div>
      {{ $t('Nuxt') }}
    </div>
    <nav>
      <ul class="flex gap-4">
        <li v-for="menu in menus">
          <NuxtLink :to="menu.routePath">
            {{ menu.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>