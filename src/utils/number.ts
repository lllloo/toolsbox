/**
 * 格式化數字為美式格式的字串
 *
 * @param value - 要格式化的數字
 * @returns 格式化後的字串，若無法格式化則回傳傳入的資料
 *
 * @example
 * numberFormat(1234567.89) // "1,234,567.89"
 */
export const numberFormat = (value: number | string): string | number => {
  if (value === null || value === undefined || value === '') return value
  const numberValue = Number(value)
  if (isNaN(numberValue)) return value
  return new Intl.NumberFormat('en-US').format(numberValue)
}

/**
 * 用另一個字串（如有需要，會重複多次）從當前字串或數字的開頭進行填充，直到結果字串達到給定的長度。
 *
 * @param value - 要填充的值，可以是數字或字串。
 * @param length - 填充後的目標字串長度。
 * @param padString - 用來填充當前字串的字串。默認為 '0'。
 * @returns 填充後的字串，如果失敗則返回原始值。
 * @example
 * padStart(1, 2) // "01"
 */
export const padStart = (value: number | string, length: number = 0, padString: string = '0') => {
  if (!value) return value
  return String(value).padStart(length, padString)
}

/**
 * 生成一個在指定範圍內的隨機整數。
 *
 * @param min - 隨機整數的最小值。
 * @param max - 隨機整數的最大值。
 * @returns 在範圍內的隨機整數。
 *
 * @example
 * getRandom(1, 10) // 生成一個介於 1 和 10 之間的隨機整數
 */
export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
