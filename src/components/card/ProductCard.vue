<script lang="ts" setup>
defineProps<{
  data: {
    src: string
    title: string
    // 金額
    price: number
    // 折扣後的金額
    discountPrice: number
  }
}>()
</script>

<template>
  <div
    class="flex w-full rounded-[10px] overflow-hidden bg-white shadow-[0_3px_10px_#3333331A] break-words"
  >
    <img class="aspect-[1/1] w-full max-w-[40%] h-full" :src="data.src" alt="" />
    <div class="flex flex-col px-4 py-2.5">
      <div class="text-base mb-2.5 line-clamp-2">
        {{ data.title }}
      </div>
      <div class="text-sm mt-auto">
        售價
        <span class="text-base font-bold">NT. {{ data.price }}</span>
      </div>
      <div class="text-sm">
        儲值價
        <span class="text-base font-bold">NT. {{ data.discountPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
