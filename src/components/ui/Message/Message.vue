<script lang="ts" setup>
import Message from 'primevue/message'
</script>
<template>
  <Message severity="error" variant="simple" size="small">
    <slot />
  </Message>
</template>
