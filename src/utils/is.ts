/**
 * 檢查值是否為陣列。
 *
 * @param value - 要檢查的值。
 * @returns  如果值是陣列則返回 `true`，否則返回 `false`。
 *
 * @example
 * isArray([]) // true
 */
export const isArray = Array.isArray

/**
 * 檢查值是否為物件。
 *
 * @param  val - 要檢查的值。
 * @returns  如果值是物件則返回 `true`，否則返回 `false`。
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
