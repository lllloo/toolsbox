<script lang="ts" setup></script>
<template>
  <div
    class="w-full p-[60px] rounded-[10px] overflow-hidden bg-white shadow-[0_3px_10px_#3333331A] break-words"
  >
    <LineTitle class="text-4xl/snug mb-12" title="登入" />

    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-lg/6 font-medium text-gray-900">帳號</label>
        <div class="mt-2.5">
          <Input id="email" type="email" name="email" autocomplete="email" />
        </div>
      </div>

      <div>
        <label for="password" class="block text-lg/6 font-medium text-gray-900">密碼</label>
        <div class="mt-2.5">
          <Input id="password" type="password" name="password" autocomplete="current-password" />
        </div>
      </div>

      <div class="!mt-12">
        <Button type="submit" size="lg" class="w-full"> 登入 </Button>
      </div>

      <div>
        <Button variant="outline" size="lg" class="w-full"> 取消 </Button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
