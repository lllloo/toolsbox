<script lang="ts" setup>
const list = ref([
  {
    title: 'BANNER 1',
    image: 'https://picsum.photos/1920/1080?random=1',
  },
  {
    title: 'BANNER 2',
    image: 'https://picsum.photos/1920/1080?random=2',
  },
  {
    title: 'BANNER 3',
    image: 'https://picsum.photos/1920/1080?random=3',
  },
])
</script>

<template>
  <div>
    <section class="h-dvh flex-1">
      <BannerSwiper :list="list" />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
