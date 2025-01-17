<script lang="ts" setup></script>

<template>
  <div class="h-[calc(100dvh-130px)] relative flex-1">
    <section class="p-4 grid grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-4 bg-[#F5F5F5]">
      <div>
        <div
          class="flex w-full rounded-[10px] overflow-hidden bg-white shadow-[0_3px_10px_#3333331A] p-3"
        >
          <WordGradientTitle />
        </div>
      </div>
      <div>
        <div
          class="flex w-full rounded-[10px] overflow-hidden bg-white shadow-[0_3px_10px_#3333331A] p-3"
        >
          <SwiperMenu />
        </div>
      </div>
      <div>
        <ProductCard
          :data="{
            src: 'https://picsum.photos/500',
            title: 'Product Title - Product Title Product Title Product Title',
            price: 2000,
            discountPrice: 1280,
          }"
        />
      </div>
      <div>
        <UserPostCard
          :data="{
            name: 'John Doe',
            date: '202-12-13',
            content: 'This is a sample content.',
            like: 100,
            view: 200,
            comments: {
              count: 50,
              name: 'Other User',
              date: '202-12-12',
            },
          }"
        />
      </div>
      <div>
        <ImageCard
          :data="{
            src: 'https://picsum.photos/500/250',
            title: 'Sample Title',
            date: '2024-12-13',
          }"
        />
      </div>
      <div>
        <LoginCard />
      </div>
      <div>
        <AnimationCard />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
