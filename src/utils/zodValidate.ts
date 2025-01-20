import { z, Schema } from 'zod'

const customErrorMap: z.ZodErrorMap = (error, ctx) => {
  if (error.code === z.ZodIssueCode.invalid_type) {
    if (ctx.defaultError === 'Required') return { message: '必填' }
    return { message: '型態錯誤' }
  }
  return { message: ctx.defaultError }
}
z.setErrorMap(customErrorMap)

/**
 * Zod 驗證
 * @param {Schema<T>} schema 驗證的 schema object
 * @param {unknown} data 驗證的物件
 * @returns {{ data?: T, errors: any }}
 */
export const validate = <T>(schema: Schema<T>, data: unknown) => {
  const result = schema.safeParse(data)
  if (result.success) {
    return { data: result.data, errors: null }
  } else {
    return { data: null, errors: result.error.format() }
  }
}
