<script setup lang="ts">
const list = ref([
  {
    name: 'Index',
    url: '/',
  },
  {
    name: 'Banner',
    url: '/banner',
  },
  {
    name: 'Products',
    url: '/products',
  },
  {
    name: 'Cards',
    url: '/cards',
  },
  {
    name: 'Table',
    url: '/table',
  },
  {
    name: 'Form',
    url: '/form',
  },
])
</script>
<template>
  <header class="sticky top-0 z-20">
    <div class="flex h-16 items-center gap-4 bg-background container border-x">
      <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base mr-auto">
        <Icon icon="ic:baseline-battery-charging-20" class="text-2xl" />
        <span class="sr-only">Home</span>
      </a>
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <a
          v-for="item in list"
          :key="item.name"
          :href="item.url"
          class="text-foreground transition-colors hover:text-foreground"
        >
          {{ item.name }}
        </a>
      </nav>
    </div>
  </header>
</template>
