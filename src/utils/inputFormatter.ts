/**
 * 只能輸入正整數 (input 輸入時馬上 format)
 * @param {String} value 數字
 * @returns {String} 取代後的數字
 */
export const formatPositiveInteger = (value: string) => {
  value = value.replace(/[^\d]/g, '')
  return value !== '' ? Number(value).toString() : ''
}

/**
 * 只能輸入整數 (input 輸入時馬上 format)
 * @param {String} value 數字
 * @returns {String} 取代後的數字
 */
export const formatInteger = (value: string) => {
  value = value
    .replace(/[A-Za-z]/g, '')
    .replace(/^-/, 'N')
    .replace(/[^\dN]/g, '')
    .replace('N', '-')
    .replace(/^(-)?0+(?=\d)/, '$1')
  if (value === '' || value === '-') return value
  return value
}

/**
 * 只能輸入小數點第二位 (input 輸入時馬上 format)
 * @param {String} value 數字
 * @returns {String} 取代後的數字
 */
export const formatDecimal = (value: string) => {
  const numeralDecimalScale = 2
  let parts,
    partInteger,
    partDecimal = ''

  value = value
    .replace(/[A-Za-z]/g, '')
    .replace('.', 'M')
    .replace('-', 'N')
    .replace(/[^\dMN]/g, '')
    .replace('M', '.')
    .replace('N', '-')
    .replace(/^(-)?0+(?=\d)/, '$1')

  if (value.indexOf('.') >= 0) {
    parts = value.split('.')
    partInteger = parts[0]
    partDecimal = '.' + parts[1].slice(0, numeralDecimalScale)
  } else {
    partInteger = value
  }

  return partInteger + partDecimal
}
