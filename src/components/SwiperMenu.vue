<script lang="ts" setup>
import { register } from 'swiper/element/bundle'
register()

const checked = ref(1)
</script>
<template>
  <swiper-container
    class="w-full"
    :slides-per-view="'auto'"
    :space-between="10"
    :pagination="false"
  >
    <swiper-slide v-for="i in 10" :key="i" class="w-auto">
      <Button :variant="checked === i ? 'default' : 'secondary'" @click="checked = i">
        Slide {{ i }}
      </Button>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped></style>
