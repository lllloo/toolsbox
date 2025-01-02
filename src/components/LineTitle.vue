<script lang="ts" setup>
defineProps({
  title: String,
})
</script>
<template>
  <div
    class="line-bg-gradient relative pl-5 leading-[1.3] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-[60%] before:rounded-[2px]"
  >
    {{ title }}
  </div>
</template>

<style lang="scss" scoped>
.line-bg-gradient:before {
  background-image: linear-gradient(to bottom, #da8b41 0%, #da8b41 35%, #4e9875 35%, #4e9875 90%);
}
</style>
