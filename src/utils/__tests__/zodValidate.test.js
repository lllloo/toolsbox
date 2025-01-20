import { describe, it, expect } from 'vitest'
import { z } from 'zod'

export const loginSchema = z.object({
  mobile: z
    .string()
    .min(1, { message: '必填' })
    .regex(/^09\d{8}$/, { message: '請輸入正確的電話' }),
  password: z.string().min(1, { message: '必填' }).min(6, { message: '密碼至少6個字' }),
})

describe('validate success', () => {
  it('驗證成功', () => {
    const data = {
      mobile: '0987654321',
      password: '123456',
    }

    const result = validate(loginSchema, data)
    expect(!result.errors).toBe(true)
  })

  it('驗證失敗', () => {
    const data = {
      mobile: '',
      password: '123456',
    }
    const result = validate(loginSchema, data)
    expect(!result.errors).toBe(false)
    expect(result.errors).toEqual(
      expect.objectContaining({
        mobile: expect.objectContaining({
          _errors: expect.arrayContaining(['必填']),
        }),
      }),
    )
  })
})

describe('validate default error', () => {
  it('驗證失敗 必填', () => {
    const data = {}
    const result = validate(
      z.object({
        mobile: z.string(),
      }),
      data,
    )
    expect(!result.errors).toBe(false)
    expect(result.errors).toEqual(
      expect.objectContaining({
        mobile: expect.objectContaining({
          _errors: expect.arrayContaining(['必填']),
        }),
      }),
    )
  })
  it('驗證失敗 型態錯誤', () => {
    const data = {
      mobile: 0,
    }
    const result = validate(
      z.object({
        mobile: z.string(),
      }),
      data,
    )
    expect(!result.errors).toBe(false)
    expect(result.errors).toEqual(
      expect.objectContaining({
        mobile: expect.objectContaining({
          _errors: expect.arrayContaining(['型態錯誤']),
        }),
      }),
    )
  })
})

describe('validate field', () => {
  it('驗證成功', () => {
    const data = {
      mobile: '0987654321',
    }
    const mobile = loginSchema.shape.mobile
    const result = validate(mobile, data.mobile)
    expect(!result.errors).toBe(true)
  })

  it('驗證失敗', () => {
    const data = {
      mobile: '',
    }
    const mobile = loginSchema.shape.mobile
    const result = validate(mobile, data.mobile)
    expect(!result.errors).toBe(false)
    expect(result.errors).toEqual(
      expect.objectContaining({
        _errors: expect.arrayContaining(['必填']),
      }),
    )
  })
})

describe('validate default', () => {
  it('mobile 驗證成功', () => {
    const data = {}
    const result = validate(
      z.object({
        mobile: z.string().nullish().default(''),
        password: z.string().nullish().default(''),
      }),
      data,
    )
    expect(!result.errors).toBe(true)
    expect(result.data).toEqual({
      mobile: '',
      password: '',
    })
  })
})

describe('validate Number', () => {
  it('mobile 驗證成功', () => {
    const schema = z.object({
      number: z.number().default(0),
    })
    const data = {
      number: undefined,
    }
    const result = validate(schema, data)
    expect(!result.errors).toBe(true)
    expect(result.data).toEqual({
      number: 0,
    })
  })
})

describe('validate Array', () => {
  it('mobile 驗證成功', () => {
    const data = {
      arr2: [1],
    }
    const result = validate(
      z.object({
        arr: z.number().array().default([]),
        arr2: z.number().array().nonempty({ message: '請至少選擇一項' }),
      }),
      data,
    )
    expect(!result.errors).toBe(true)
    expect(result.data).toEqual({
      arr: [],
      arr2: [1],
    })
  })
})
