import { describe, it, expect } from 'vitest'

describe('getShowPageList', () => {
  it('顯示正確的頁數 開頭', () => {
    const result = getShowPageList(1, 10, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('顯示正確的頁數 中間', () => {
    const result = getShowPageList(4, 10, 5)
    expect(result).toEqual([2, 3, 4, 5, 6])
  })

  it('顯示正確的頁數 結尾', () => {
    const result = getShowPageList(10, 10, 5)
    expect(result).toEqual([6, 7, 8, 9, 10])
  })

  it('顯示頁數大於總共頁數', () => {
    const result = getShowPageList(1, 4, 5)
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('偶數的狀況', () => {
    const result = getShowPageList(1, 6, 4)
    expect(result).toEqual([1, 2, 3, 4])
  })
})
