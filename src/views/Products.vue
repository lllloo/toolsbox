<script lang="ts" setup>
const randomColorList = [
  'bg-gray-100',
  'bg-gray-200',
  'bg-gray-300',
  'bg-gray-400',
  'bg-gray-500',
  'bg-gray-600',
  'bg-gray-700',
  'bg-gray-800',
  'bg-gray-900',
]
</script>

<template>
  <div class="relative">
    <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-4">
      <div
        v-for="n in 20"
        :key="n"
        class="animation-box"
        :class="randomColorList[getRandom(0, 8)]"
        :style="{
          height: `${getRandom(200, 400)}px`,
          'animation-delay': getRandom(1, 10) * 0.2 + 's',
        }"
      ></div>
    </section>
  </div>
</template>

<style scoped>
@keyframes slidein {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.animation-box {
  width: 0;
  animation: slidein 1s forwards;
}
</style>
