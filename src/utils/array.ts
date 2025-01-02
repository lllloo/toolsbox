/**
 * 判斷陣列中是否有重複的元素
 * @param {Array<any>} arr - 要檢查的陣列
 * @returns {boolean} - 如果陣列中有重複的元素，則返回 true，否則返回 false
 *
 * @example
 * hasDuplicate([1, 2, 3, 4, 5]) // false
 * hasDuplicate([1, 2, 3, 4, 5, 1]) // true
 */
export const hasDuplicate = (arr: unknown[]) => new Set(arr).size !== arr.length

/**
 * 生成包含從 `start` 到 `end`（包括端點）範圍內數字的陣列。
 *
 * @param start - 範圍的起始數字。
 * @param end - 範圍的結束數字。
 * @returns 從 `start` 到 `end` 的數字陣列。
 *
 * @example
 * range(0, 5) // [0, 1, 2, 3, 4, 5]
 * range(3, 6) // [3, 4, 5, 6]
 */
export const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i)
