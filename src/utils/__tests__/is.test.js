import { describe, it, expect } from 'vitest'

describe('是否為陣列', () => {
  it('應該對陣列返回 true', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('應該對非陣列返回 false', () => {
    expect(isArray({})).toBe(false)
    expect(isArray('string')).toBe(false)
    expect(isArray(123)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })
})

describe('是否為物件', () => {
  it('應該對物件返回 true', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
  })

  it('應該對非物件返回 false', () => {
    expect(isObject([])).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})

describe('是否為網址', () => {
  it('應該對有效的網址返回 true', () => {
    expect(isUrl('https://www.example.com')).toBe(true)
    expect(isUrl('http://example.com')).toBe(true)
  })

  it('應該對無效的網址返回 false', () => {
    expect(isUrl('not a url')).toBe(false)
    expect(isUrl('www.example.com')).toBe(false)
    expect(isUrl('')).toBe(false)
  })
})

describe('是否為有效日期', () => {
  it('應該對有效的日期物件返回 true', () => {
    expect(isValidDate(new Date())).toBe(true)
    expect(isValidDate(new Date('2023-01-01'))).toBe(true)
    expect(isValidDate('2023-01-01')).toBe(true)
    expect(isValidDate(1672531199000)).toBe(true)
  })

  it('應該對無效的日期物件返回 false', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false)
  })

  it('應該對非日期物件返回 false', () => {
    expect(isValidDate(null)).toBe(false)
    expect(isValidDate(undefined)).toBe(false)
    expect(isValidDate({})).toBe(false)
  })
})
