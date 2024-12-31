<script setup lang="ts">
import { Icon as Iconify } from '@iconify/vue'

type IconProps = { icon: string; name?: string } | { icon?: string; name: string }
const props = defineProps<IconProps>()

const IconComponent = defineAsyncComponent(() => {
  return import(`@/assets/icon/${props.name}.svg`)
})

const isIconify = computed(() => !!('icon' in props && props.icon))

const iconProps = computed(() => {
  if (isIconify.value) {
    return props
  } else {
    return {
      ...props,
      width: '1em',
      height: '1em',
    }
  }
})
</script>

<template>
  <span>
    <component :is="isIconify ? Iconify : IconComponent" v-bind="iconProps" />
  </span>
</template>

<style scoped>
svg {
  fill: currentColor;
}
</style>
