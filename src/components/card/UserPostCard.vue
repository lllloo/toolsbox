<script lang="ts" setup>
defineProps<{
  data: {
    name: string
    date: string
    content: string
    like: number
    view: number
    comments: {
      count: number
      name: string
      date: string
    }
  }
}>()
</script>

<template>
  <div class="w-full px-4 py-2.5 rounded-[10px] bg-white shadow-[0_3px_10px_#3333331A] break-words">
    <div class="flex justify-between items-center mb-2.5">
      <div class="flex items-center min-w-0">
        <Icon icon="ic:outline-account-circle" class="text-2xl text-gray-500 mr-1.5 flex-none" />
        <div class="min-w-0">
          <div class="text-sm line-clamp-1">{{ data.name }}</div>
          <div class="text-xs text-gray-500">{{ data.date }}</div>
        </div>
      </div>
      <div class="flex text-xs flex-none">
        <div class="flex items-center mr-2">
          <Icon icon="ic:baseline-favorite" class="text-xl text-red-500 mr-1" />
          {{ data.like }}
        </div>
        <div class="flex items-center">
          <Icon icon="ic:outline-remove-red-eye" class="text-xl text-gray-500 mr-1" />
          {{ data.view }}
        </div>
      </div>
    </div>
    <div class="mb-4 font-bold line-clamp-1">
      {{ data.content }}
    </div>
    <hr class="my-2.5" />
    <div class="flex text-gray-500 text-xs leading-5">
      <div class="flex items-center flex-none mr-2 text-black">
        <Icon icon="ic:outline-message" class="text-xl leading-none text-gray-500 mr-1" />
        {{ data.comments.count }}
      </div>
      <div class="mr-2 line-clamp-1">{{ data.comments.name }}</div>
      <div class="mr-2 flex-none">{{ data.comments.date }}</div>
    </div>
  </div>
</template>

<style scoped></style>
