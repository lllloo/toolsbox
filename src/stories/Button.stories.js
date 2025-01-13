import { fn } from '@storybook/test'
import Button from '@/components/ui/button/Button.vue'
import Icon from '@/components/Icon.vue'

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

export const Size = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    components: { Button, Icon },
    setup: () => ({ args }),
    template: `
      <div class="flex gap-2">
        <Button v-bind="args" v-html="args.default" size="xs"  />
        <Button v-bind="args" v-html="args.default" size="sm"  />
        <Button v-bind="args" v-html="args.default" size="default"  />
        <Button v-bind="args" v-html="args.default" size="lg"  />
        <Button v-bind="args" size="icon">
          <Icon icon="ic:baseline-check" />
        </Button>
      </div>
    `,
  }),
}
