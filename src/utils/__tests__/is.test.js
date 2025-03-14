import { describe, it, expect } from 'vitest'
import {
  isArray,
  isObject,
  isString,
  isNumber,
  isFunction,
  isUndefined,
  isNull,
  isEmpty,
  isUrl,
  isValidDate,
} from '../is'

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

describe('是否為字串', () => {
  it('應該對字串返回 true', () => {
    expect(isString('')).toBe(true)
    expect(isString('hello')).toBe(true)
  })

  it('應該對非字串返回 false', () => {
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(123)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })
})

describe('是否為數字', () => {
  it('應該對數字返回 true', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(123)).toBe(true)
    expect(isNumber(-123)).toBe(true)
    expect(isNumber(1.23)).toBe(true)
  })

  it('應該對 NaN 返回 false', () => {
    expect(isNumber(NaN)).toBe(false)
  })

  it('應該對非數字返回 false', () => {
    expect(isNumber('123')).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
  })
})

describe('是否為函數', () => {
  it('應該對函數返回 true', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(Date)).toBe(true)
  })

  it('應該對非函數返回 false', () => {
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction('string')).toBe(false)
    expect(isFunction(123)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
  })
})

describe('是否為 undefined', () => {
  it('應該對 undefined 返回 true', () => {
    expect(isUndefined(undefined)).toBe(true)
    let a
    expect(isUndefined(a)).toBe(true)
  })

  it('應該對非 undefined 返回 false', () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined([])).toBe(false)
  })
})

describe('是否為 null', () => {
  it('應該對 null 返回 true', () => {
    expect(isNull(null)).toBe(true)
  })

  it('應該對非 null 返回 false', () => {
    expect(isNull(undefined)).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
  })
})

describe('是否為空', () => {
  it('應該對空值返回 true', () => {
    expect(isEmpty('')).toBe(true)
    expect(isEmpty('  ')).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  it('應該對非空值返回 false', () => {
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
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
