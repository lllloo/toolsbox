<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
  <AppHeader class="border-b" />
  <div class="container border-x relative p-0">
    <slot />
  </div>
  <AppFooter class="border-t" />
</template>
<style lang="scss" scoped></style>
