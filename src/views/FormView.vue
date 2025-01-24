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

type Schema = z.infer<typeof schema>
type SchemaKey = keyof Schema
const form = reactive<Schema>(schema.default({}))

Object.keys(schema.shape).forEach((key) => {
  const [field] = defineField(key as SchemaKey)
  form[key as SchemaKey] = field as unknown as string
})

const { list, city, area } = useCity(toRef(form, 'city'), toRef(form, 'area'))
</script>
<template>
  <div>
    <div class="relative p-8 h-[calc(100dvh-130px)]">
      <form class="max-w-2xl mx-auto">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-6">
            {{ form }}
          </div>
          <div class="sm:col-span-6">
            cityV:{{ cityV }}<br />
            areaV:{{ areaV }}<br />
            <!-- codeV:{{ codeV }}<br /> -->

            city:{{ city }}<br />
            area:{{ area }}<br />
            <!-- code:{{ code }}<br /> -->
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
            <div class="mt-2">
              <Input v-model="form.username" class="w-full" />
            </div>
            <Message>123</Message>
          </div>
          <div class="sm:col-span-2"></div>
          <div class="sm:col-span-2">
            <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
            <div class="mt-2">
              <Select v-model="form.city" :options="list.city" />
            </div>
          </div>
          <!-- <div class="sm:col-span-2">
            <label for="area" class="block text-sm/6 font-medium text-gray-900">Area</label>
            <div class="mt-2">
              <Select v-model="form.area" :options="list.area" />
            </div>
          </div> -->
          <!-- <div class="sm:col-span-2">
            <label for="code" class="block text-sm/6 font-medium text-gray-900">Code</label>
            <div class="mt-2">
              <Input v-model="form.code" readonly />
            </div>
          </div> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
