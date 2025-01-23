import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import '@/assets/main.css'

setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: false || 'none',
      },
    },
  })
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
