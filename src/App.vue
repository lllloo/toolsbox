<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const DefaultLayoutComponent = defineAsyncComponent(() => {
  return import(`@/layouts/DefaultLayout.vue`)
})
const layout = computed(() => {
  return route.meta.layout === 'DefaultLayout' ? DefaultLayoutComponent : 'div'
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
