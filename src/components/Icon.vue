<script setup lang="ts">
import { Icon as Iconify, type IconifyIconProps } from '@iconify/vue'
import { defineAsyncComponent } from 'vue'

type IconProps = IconifyIconProps | { name: string }

const props = withDefaults(defineProps<IconProps>(), {
  icon: '',
  name: '',
})

const iconComponent = defineAsyncComponent(() => {
  if (!('name' in props && props.name)) return Promise.reject()
  return import(`/src/assets/icon/${props.name}.svg`)
})
</script>

<template>
  <span>
    <template v-if="'icon' in props && props.icon">
      <Iconify v-bind="props" />
    </template>
    <template v-else>
      <component :is="iconComponent" width="1em" height="1em" class="fill-current" />
    </template>
  </span>
</template>
