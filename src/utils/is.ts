/**
 * 檢查值是否為陣列。
 *
 * @param value - 要檢查的值。
 * @returns 如果值是陣列則返回 `true`，否則返回 `false`。
 *
 * @example
 * isArray([]) // true
 */
export const isArray = Array.isArray

/**
 * 檢查值是否為物件。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是物件則返回 `true`，否則返回 `false`。
 *
 * @example
 * isObject({}) // true
 */
export const isObject = (val: unknown) => {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}

/**
 * 檢查給定的字串是否為有效的 URL。
 *
 * @param val - 要檢查的字串。
 * @returns 如果字串是有效的 URL，返回 true；否則返回 false。
 * @example
 * isUrl('https://example.com') // true
 */
export const isUrl = (val: string): boolean => {
  try {
    return Boolean(new URL(val))
  } catch {
    return false
  }
}

/**
 * 檢查值是否為有效的日期。
 *
 * @param x - 要檢查的值，可以是字串、數字或日期物件。
 * @returns 如果值是有效的日期則返回 `true`，否則返回 `false`。
 *
 * @example
 * isValidDate(new Date()) // true
 * isValidDate(new Date('invalid')) // false
 * isValidDate('2023-01-01') // true
 * isValidDate(1672531199000) // true
 */
export const isValidDate = (x: string | number | Date) => {
  if (x === null || x === undefined) return false
  const date = new Date(x)
  return date instanceof Date && !isNaN(date.getTime())
}
