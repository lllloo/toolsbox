<script setup lang="ts">
const route = useRoute()

const DefaultLayoutComponent = defineAsyncComponent(() => {
  return import(`@/layouts/DefaultLayout.vue`)
})
const layout = computed(() => {
  console.log()
  if (route.meta.layout === undefined) {
    return DefaultLayoutComponent
  }

  return route.meta.layout === 'DefaultLayout' ? DefaultLayoutComponent : 'div'
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
