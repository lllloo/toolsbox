<script setup lang="ts">
const list = ref([
  {
    name: 'Index',
    url: '/',
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    name: 'Banner',
    url: '/banner',
  },
  {
    name: 'Products',
    url: '/products',
  },
  {
    name: 'Cards',
    url: '/cards',
  },
  {
    name: 'Word',
    url: '/word',
  },
  {
    name: 'Login',
    url: '/login',
  },
])
</script>
<template>
  <header class="sticky top-0 z-20">
    <div class="flex h-16 items-center gap-4 bg-background container border-x">
      <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base mr-auto">
        <Icon name="ic:baseline-battery-charging-20" class="text-2xl" />
        <span class="sr-only">Home</span>
      </a>
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <a
          v-for="item in list"
          :key="item.name"
          :href="item.url"
          class="text-foreground transition-colors hover:text-foreground"
        >
          {{ item.name }}
        </a>
      </nav>
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline" size="icon" class="shrink-0 md:hidden">
            <Icon name="ic:menu" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav class="grid gap-6 text-lg font-medium">
            <a href="#" class="flex items-center gap-2 text-lg font-semibold">
              <Icon name="ic:baseline-battery-charging-20" class="text-2xl" />
              <span class="sr-only">Home</span>
            </a>
            <a v-for="item in list" :key="item.name" :href="item.url" class="hover:text-foreground">
              {{ item.name }}
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
