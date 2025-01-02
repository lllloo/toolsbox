/**
 * 驗證身分證號是否正確
 * @param {String} value 身分證號
 * @returns {Boolean} 是否正確
 */
export const checkTWID = (value: string) => {
  const regex = new RegExp(/^[A-Za-z][12]\d{8}$/)
  if (!regex.test(value)) return false

  const cityCode = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  const id = String(cityCode.indexOf(value[0].toUpperCase()) + 10) + value.slice(1)

  let weightsNum = 0
  for (let i = 0; i < weights.length; i++) {
    weightsNum += parseInt(id[i]) * weights[i]
  }
  return weightsNum % 10 == 0
}

/**
 * 驗證統一編號
 * @param {String} value 統一編號
 * @returns {Boolean} 是否正確
 */
export const checkUniformNumbers = (value: string) => {
  const regex = new RegExp(/^\d{8}$/)
  if (!regex.test(value)) return false

  const code = [1, 2, 1, 2, 1, 2, 4, 1]
  let weightsNum = 0

  if (value[6] !== '7') {
    weightsNum = [...value].reduce((acc, cur, i) => {
      let number = parseInt(cur) * code[i]
      if (number >= 10) {
        const moreThen10 = `${number}`
        number = parseInt(moreThen10[0]) + parseInt(moreThen10[1])
      }
      return acc + number
    }, 0)
    return weightsNum % 5 === 0
  }

  // 第7位數為7
  weightsNum = [...value].reduce((acc, cur, i) => {
    if (i === 6) {
      return acc
    }
    let number = parseInt(cur) * code[i]
    if (number >= 10) {
      const moreThen10 = `${number}`
      number = parseInt(moreThen10[0]) + parseInt(moreThen10[1])
    }
    return acc + number
  }, 0)
  return weightsNum % 5 === 0 || (weightsNum + 1) % 5 === 0
}

/**
 * 驗證手機號碼
 * @param {String} value 身分證號
 * @returns {Boolean} 是否正確
 */
export const checkPhoneNumber = (value: string) => {
  return /^09\d{8}$/.test(value)
}

/**
 *  驗證電子郵件
 * @param {String} value 電子郵件
 * @returns {Boolean} 是否正確
 */
export const checkEmail = (value: string) => {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
}
