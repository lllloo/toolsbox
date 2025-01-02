/**
 * 生成一個隨機的 UUID。
 *
 * @returns 一個隨機生成的 UUID 字符串。
 *
 * @example
 * getUUID() // "72e80705-d7c8-4051-9e1a-9308b73aaf22"
 */
export const getUUID: () => string = () => {
  try {
    return crypto.randomUUID()
  } catch {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
}
