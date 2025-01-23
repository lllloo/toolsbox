<script lang="ts" setup>
import Select from 'primevue/select'

const value = defineModel({
  type: String,
})

defineProps({
  options: Array,
})
</script>
<template>
  <Select
    class="w-full"
    v-model="value"
    :options="options"
    optionLabel="label"
    optionValue="value"
    :pt="{
      overlay: 'custom-overlay',
    }"
  />
</template>
<style lang="scss"></style>
