import { describe, it, expect } from 'vitest'

function itFail(fn) {
  it('應該回傳 空字串', () => {
    const result = fn('')
    expect(result).toBe('')
  })

  it('應該回傳 null', () => {
    const result = fn(null)
    expect(result).toBe(null)
  })

  it('應該回傳 undefined', () => {
    const result = fn(undefined)
    expect(result).toBe(undefined)
  })

  it('應該回傳 NaN', () => {
    const result = fn(NaN)
    expect(result).toBe(NaN)
  })
}

describe('數字格式化', () => {
  it('應該將數字格式化為帶有逗號和小數點的格式', () => {
    const result = numberFormat(1234567.89)
    expect(result).toBe('1,234,567.89')
  })

  it('應該將整數格式化為帶有逗號的格式', () => {
    const result = numberFormat(1234567)
    expect(result).toBe('1,234,567')
  })

  it('應該將小數字格式化為不帶逗號的格式', () => {
    const result = numberFormat(123)
    expect(result).toBe('123')
  })

  it('應該將數字格式化為帶有兩位小數的格式', () => {
    const result = numberFormat(1234.56)
    expect(result).toBe('1,234.56')
  })

  it('應該正確格式化負數', () => {
    const result = numberFormat(-1234567.89)
    expect(result).toBe('-1,234,567.89')
  })

  it('應該將帶有逗號和小數點的數字格式化', () => {
    const result = numberFormat('11,220')
    expect(result).toBe('11,220')
  })

  it('應該返回錯誤的格式化結果', () => {
    const result = numberFormat('abcdefg')
    expect(result).toBe('abcdefg')
  })

  describe('測試 "" null undefined NaN 應該返回自身', () => {
    itFail(numberFormat)
  })
})

describe('padStart', () => {
  it('應該用默認的填充字串填充數字', () => {
    const result = padStart(123, 5)
    expect(result).toBe('00123')
  })

  it('應該用指定的填充字串填充數字', () => {
    const result = padStart(123, 5, 'x')
    expect(result).toBe('xx123')
  })

  it('應該用默認的填充字串填充字串', () => {
    const result = padStart('abc', 5)
    expect(result).toBe('00abc')
  })

  it('應該用指定的填充字串填充字串', () => {
    const result = padStart('abc', 5, 'x')
    expect(result).toBe('xxabc')
  })

  it('應該返回原始值當長度小於或等於當前值的長度時', () => {
    const result = padStart('abcdefg', 3)
    expect(result).toBe('abcdefg')
  })

  it('應該返回原始值當長度小於或等於當前數字的長度時', () => {
    const result = padStart(123, 3)
    expect(result).toBe('123')
  })

  describe('測試 "" null undefined NaN 應該返回自身', () => {
    itFail(padStart)
  })
})

describe('getRandom', () => {
  it('應該生成指定範圍內的隨機數', () => {
    const min = 1
    const max = 10
    const random = getRandom(min, max)
    expect(random).toBeGreaterThanOrEqual(min)
    expect(random).toBeLessThanOrEqual(max)
  })

  it('當 min 和 max 相同時應該生成指定範圍內的隨機數', () => {
    const min = 5
    const max = 5
    const random = getRandom(min, max)
    expect(random).toBe(5)
  })
})
