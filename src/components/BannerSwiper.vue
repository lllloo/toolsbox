<script lang="ts" setup>
import { EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

defineProps<{
  list?: { image: string; title: string }[]
}>()

const isSwiperLoaded = ref(false)
const onInit = () => {
  isSwiperLoaded.value = true
}
</script>
<template>
  <div class="swiper-wrap w-full h-full">
    <Swiper
      class="h-full"
      effect="fade"
      :slides-per-view="1"
      :space-between="0"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="[EffectFade, Pagination]"
      loop
      @init="onInit"
    >
      <SwiperSlide v-for="(item, index) in list" :key="index" v-slot="{ isActive }">
        <div class="relative w-full h-full flex justify-center items-center">
          <h2
            :class="[
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] px-5 text-white text-5xl/tight font-bold bg-white/9 backdrop-blur',
              'sm:px-9 sm:text-7xl/tight',
            ]"
          >
            {{ item.title }}
          </h2>
          <img
            :class="[
              'w-full h-full object-cover object-center scale-110 transition-all duration-500 delay-100',
              isActive && '!scale-100',
            ]"
            :src="item.image"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination" />
  </div>
</template>

<style lang="scss" scoped>
.swiper-wrap {
  --swiper-pagination-bottom: 0;
  --swiper-pagination-color: rgba(0, 0, 0, 0.7);
}
</style>
