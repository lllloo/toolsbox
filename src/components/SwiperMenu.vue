<script lang="ts" setup>
import { register } from 'swiper/element/bundle'
register()

const checked = ref(1)
const swiperEl = ref()

const check = (index: number) => {
  checked.value = index
  swiperEl.value.swiper.slideTo(index - 1)
}
</script>
<template>
  <div class="w-full">
    <swiper-container
      class="size-full"
      slides-per-view="auto"
      :space-between="10"
      :pagination="false"
      :centered-slides="true"
      ref="swiperEl"
    >
      <swiper-slide v-for="i in 10" :key="i" class="flex-1">
        <Button :variant="checked === i ? 'default' : 'secondary'" @click="check(i)">
          Slide {{ i }}
        </Button>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped></style>
