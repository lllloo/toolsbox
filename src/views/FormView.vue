<script lang="ts" setup>
const { list, city, area, code } = useCity()

const form = reactive({
  username: '',
  city: city,
  area: area,
  code: code,
})
</script>
<template>
  <div>
    <div class="relative p-8 h-[calc(100dvh-65px)] border-b">
      <form class="max-w-2xl mx-auto">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-6">
            {{ form }}
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
            <div class="mt-2">
              <Input v-model="form.username" class="w-full" />
            </div>
          </div>
          <div class="sm:col-span-2"></div>
          <div class="sm:col-span-2">
            <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
            <div class="mt-2">
              <Select v-model="form.city" :options="list.city" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="area" class="block text-sm/6 font-medium text-gray-900">Area</label>
            <div class="mt-2">
              <Select v-model="form.area" :options="list.area" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="code" class="block text-sm/6 font-medium text-gray-900">Code</label>
            <div class="mt-2">
              <Input v-model="form.code" readonly />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
