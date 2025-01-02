import { describe, it, expect } from 'vitest'

describe('hasDuplicate', () => {
  it('應該返回 false 對於沒有重複的陣列', () => {
    expect(hasDuplicate([1, 2, 3, 4, 5])).toBe(false)
  })

  it('應該返回 true 對於有重複的陣列', () => {
    expect(hasDuplicate([1, 2, 3, 4, 5, 1])).toBe(true)
  })

  it('應該返回 false 對於空陣列', () => {
    expect(hasDuplicate([])).toBe(false)
  })

  it('應該返回 false 對於只有一個元素的陣列', () => {
    expect(hasDuplicate([1])).toBe(false)
  })
})

describe('range', () => {
  it('應該生成從開始到結束（包含結束）的數字範圍', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('應該生成從開始到結束（包含結束）的數字範圍', () => {
    expect(range(3, 6)).toEqual([3, 4, 5, 6])
  })

  it('當開始等於結束時應該生成單個數字的範圍', () => {
    expect(range(5, 5)).toEqual([5])
  })

  it('當開始大於結束時應該生成空陣列', () => {
    expect(range(5, 3)).toEqual([])
  })
})
