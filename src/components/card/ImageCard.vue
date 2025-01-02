<script lang="ts" setup>
defineProps<{
  data: {
    src: string
    title: string
    date: string
  }
}>()
</script>

<template>
  <div
    class="w-full rounded-[10px] overflow-hidden bg-white shadow-[0_3px_10px_#3333331A] break-words"
  >
    <img class="w-full aspect-[2/1]" :src="data.src" alt="" />
    <div class="flex flex-col justify-between px-4 py-2.5">
      <div class="text-base mb-2.5 line-clamp-2">
        {{ data.title }}
      </div>
      <div class="text-xs">{{ data.date }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
