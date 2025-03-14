/**
 * @jest-environment-options {"url": "http://localhost?name=John&age=30&a=b&a=c"}
 */

import { describe, it, expect } from 'vitest'

describe('取得查詢參數', () => {
  it('應該正確解析包含陣列的 URL 查詢參數', () => {
    const url = window.location.search
    const params = getQueryParams(url)
    expect(params).toEqual({ name: 'John', age: '30', a: ['b', 'c'] })
  })
})

describe('將物件轉換為查詢字串', () => {
  it('應該正確生成包含陣列的 URL 查詢參數', () => {
    const params = { name: 'John', age: '30', a: ['b', 'c'] }
    const url = objectToQueryString(params)
    expect(url).toBe('name=John&age=30&a=b&a=c')
  })
})

describe('簡單取得查詢參數', () => {
  it('應該正確解析包含陣列的 URL 查詢參數', () => {
    const url = window.location.search
    const params = simpleGetQueryParams(url)
    expect(params).toEqual({ name: 'John', age: '30', a: ['b', 'c'] })
  })
})

describe('簡單將物件轉換為查詢字串', () => {
  it('應該正確生成包含陣列的 URL 查詢參數', () => {
    const params = { name: 'John', age: '30', a: ['b', 'c'] }
    const url = simpleObjectToQueryString(params)
    expect(url).toBe('name=John&age=30&a=b&a=c')
  })
})
