<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(1, '必填').default(''),
  city: z.string().min(1, '必填').default(''),
  area: z.string().min(1, '必填').default(''),
  code: z.string().min(1, '必填').default(''),
})

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(schema),
})

type FormValues = z.infer<typeof schema>

const form = reactive<Record<string, unknown>>({})

const fields = Object.keys(schema.shape) as (keyof FormValues)[]

fields.forEach((field) => {
  ;[form[field]] = defineField(field)
})

const { list } = useCity(toRef(form, 'city'), toRef(form, 'area'), toRef(form, 'code'))

const submit = handleSubmit(async (values) => {
  console.log(values)
})
</script>
<template>
  <div>
    <div class="relative p-8 h-[calc(100dvh-130px)]">
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
            <Message>{{ errors?.username }}</Message>
          </div>
          <div class="sm:col-span-2"></div>
          <div class="sm:col-span-2">
            <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
            <div class="mt-2">
              <Select v-model="form.city" :options="list.city" />
            </div>
            <Message>{{ errors?.city }}</Message>
          </div>
          <div class="sm:col-span-2">
            <label for="area" class="block text-sm/6 font-medium text-gray-900">Area</label>
            <div class="mt-2">
              <Select v-model="form.area" :options="list.area" />
            </div>
            <Message>{{ errors?.area }}</Message>
          </div>
          <div class="sm:col-span-2">
            <label for="code" class="block text-sm/6 font-medium text-gray-900">Code</label>
            <div class="mt-2">
              <Input v-model="form.code" readonly />
            </div>
          </div>
          <div class="sm:col-span-4">
            <Button @click="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
