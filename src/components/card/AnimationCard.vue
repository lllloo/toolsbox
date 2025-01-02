<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import animation from '@/assets/animation/animation.json'
</script>
<template>
  <div class="w-full px-4 py-2.5 rounded-[10px] bg-black shadow-[0_3px_10px_#3333331A] break-words">
    <DotLottieVue
      class="w-full h-full opacity-70 animate-spin"
      :style="{
        'animation-duration': '10s',
      }"
      autoplay
      loop
      :speed="0.5"
      :data="JSON.stringify(animation)"
      :use-frame-interpolation="true"
    />
  </div>
</template>
