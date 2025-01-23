import { fn } from '@storybook/test'
import Input from '@/components/ui/input/Input.vue'
import Icon from '@/components/Icon.vue'

export default {
  component: Input,
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: `
      <Input v-bind="args" v-model="args.value" />
    `,
  }),
}

export const Default = {
  args: {
    value: '',
    onInput: fn(),
  },
}

export const Size = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    components: { Input, Icon },
    setup: () => ({ args }),
    template: `
      <div class="flex gap-2">
        <Input v-bind="args" v-model="args.value" size="xs"  />
        <Input v-bind="args" v-model="args.value" size="sm"  />
        <Input v-bind="args" v-model="args.value" size="default"  />
        <Input v-bind="args" v-model="args.value" size="lg"  />
        <Input v-bind="args" size="icon">
          <Icon icon="ic:baseline-check" />
        </Input>
      </div>
    `,
  }),
}
