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
 * 檢查值是否為字串。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是字串則返回 `true`，否則返回 `false`。
 *
 * @example
 * isString('hello') // true
 */
export const isString = (val: unknown): val is string => {
  return typeof val === 'string'
}

/**
 * 檢查值是否為數字。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是數字則返回 `true`，否則返回 `false`。
 *
 * @example
 * isNumber(123) // true
 * isNumber(NaN) // false
 */
export const isNumber = (val: unknown): val is number => {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * 檢查值是否為函數。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是函數則返回 `true`，否則返回 `false`。
 *
 * @example
 * isFunction(() => {}) // true
 */
export const isFunction = (val: unknown): boolean => {
  return typeof val === 'function'
}

/**
 * 檢查值是否為 undefined。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是 undefined 則返回 `true`，否則返回 `false`。
 *
 * @example
 * isUndefined(undefined) // true
 */
export const isUndefined = (val: unknown): val is undefined => {
  return val === undefined
}

/**
 * 檢查值是否為 null。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是 null 則返回 `true`，否則返回 `false`。
 *
 * @example
 * isNull(null) // true
 */
export const isNull = (val: unknown): val is null => {
  return val === null
}

/**
 * 檢查值是否為空（空字串、空陣列、空物件）。
 *
 * @param val - 要檢查的值。
 * @returns 如果值是空則返回 `true`，否則返回 `false`。
 *
 * @example
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 */
export const isEmpty = (val: unknown): boolean => {
  if (val === null || val === undefined) return true
  if (typeof val === 'string') return val.trim().length === 0
  if (Array.isArray(val)) return val.length === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return false
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
