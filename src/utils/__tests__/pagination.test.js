import { describe, it, expect } from 'vitest'
import { getShowPageList } from '../pagination'

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

  it('處理邊界情況 - current 小於 1', () => {
    const result = getShowPageList(0, 10, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('處理邊界情況 - current 大於 pageCount', () => {
    const result = getShowPageList(11, 10, 5)
    expect(result).toEqual([6, 7, 8, 9, 10])
  })

  it('處理邊界情況 - maxVisiblePages 為 0', () => {
    const result = getShowPageList(5, 10, 0)
    expect(result).toEqual([5])
  })

  it('使用陣列簡化比較', () => {
    expect(getShowPageList(1, 10, 5)).toEqual([1, 2, 3, 4, 5])
    expect(getShowPageList(4, 10, 5)).toEqual([2, 3, 4, 5, 6])
    expect(getShowPageList(10, 10, 5)).toEqual([6, 7, 8, 9, 10])
  })
})
