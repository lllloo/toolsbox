import { fn } from '@storybook/test'
import Button from '@/components/ui/button/Button.vue'

export default {
  component: Button,
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `
      <Button v-bind="args" v-html="args.default" />
    `,
  }),
}

export const Default = {
  args: {
    default: 'Button',
    onClick: fn(),
  },
}
