import { describe, it, expect } from 'vitest'

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('should return false for non-arrays', () => {
    expect(isArray({})).toBe(false)
    expect(isArray('string')).toBe(false)
    expect(isArray(123)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })
})

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
  })

  it('should return false for non-objects', () => {
    expect(isObject([])).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})

describe('isUrl', () => {
  it('should return true for valid URLs', () => {
    expect(isUrl('https://www.example.com')).toBe(true)
    expect(isUrl('http://example.com')).toBe(true)
  })

  it('should return false for invalid URLs', () => {
    expect(isUrl('not a url')).toBe(false)
    expect(isUrl('www.example.com')).toBe(false)
    expect(isUrl('')).toBe(false)
  })
})
