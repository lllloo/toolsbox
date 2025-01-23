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

export const Variant = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `
      <div class="flex items-start gap-2">
        <Button v-bind="args" v-html="'Button'" />
        <Button v-bind="args" v-html="'Secondary'" variant="secondary" />
        <Button v-bind="args" v-html="'Outline'" variant="outline" />
        <Button v-bind="args" v-html="'Soft'" variant="soft" />
        <Button v-bind="args" v-html="'Link'" variant="link" />
        <Button v-bind="args" v-html="'Success'" variant="success" />
        <Button v-bind="args" v-html="'Danger'" variant="danger" />
        <Button v-bind="args" v-html="'Warning'" variant="warning" />
      </div>
    `,
  }),
}

export const Size = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    components: { Button, Icon },
    setup: () => ({ args }),
    template: `
      <div class="flex items-start gap-2">
        <Button v-bind="args" v-html="args.default" size="sm"  />
        <Button v-bind="args" v-html="args.default"  />
        <Button v-bind="args" v-html="args.default" size="lg"  />
        <Button v-bind="args">
          <Icon icon="ic:baseline-check" />
        </Button>
      </div>
    `,
  }),
}
