import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('swiper-'),
        },
      },
    }),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
      dirs: ['./src/utils'],
      vueTemplate: true,
    }),
    Components({
      dts: true,
    }),
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // viewBox is required to resize SVGs with CSS.
                // @see https://github.com/svg/svgo/issues/1128
                removeViewBox: false,
              },
            },
          },
          // @see https://github.com/svg/svgo/issues/674
          // {
          //   name: "prefixIds",
          //   params: {
          //     delim: "",
          //     prefix: () => svgoPrefixIdsCount++,
          //   },
          // },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
