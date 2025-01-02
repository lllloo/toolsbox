import Big from 'big.js'

/**
 * 將多維陣列展平成一維陣列。
 *
 * @param {unknown[]} args - 要展平的多維陣列。
 * @returns {unknown[]} 展平後的一維陣列。
 */
const flat = (args: unknown[]): unknown[] => {
  const array: unknown[] = []
  return array.concat(...args)
}

/**
 * 加法，將多個數字或數字陣列相加，並返回其總和。
 *
 * @param args - 要相加的數字或數字陣列。
 * @returns 總和。
 * @example
 * add(1, 2, 3) // 6
 * add([1, 2, 3) // 6
 */
export const add = (...args: (number | number[])[]): number => {
  const [first, ...rest] = flat(args) as number[]
  return rest
    .reduce((acc: Big, val: number) => {
      return acc.plus(val)
    }, Big(first))
    .toNumber()
}

/**
 * 減法，計算多個數字或數字陣列的差值。
 *
 * @param - 多個數字或數字陣列。
 * @returns  差值結果。
 *
 * @example
 * sub(10, 5) // 5
 * sub([10, 5]) // 5
 */
export const sub = (...args: (number | number[])[]): number => {
  const [first, ...rest] = flat(args) as number[]
  return rest
    .reduce((acc: Big, val: number) => {
      return acc.minus(val)
    }, Big(first))
    .toNumber()
}

/**
 * 乘法，將多個數字或數字陣列相乘，並返回結果。
 *
 * @param  - 要相乘的數字或數字陣列。
 * @returns - 相乘後的結果。
 *
 * @example
 * mul(2, 3) // 6
 * mul([2, 3]) // 6
 */
export const mul = (...args: (number | number[])[]): number => {
  const [first, ...rest] = flat(args) as number[]
  return rest
    .reduce((acc: Big, val: number) => {
      return acc.times(val)
    }, Big(first))
    .toNumber()
}

/**
 * 除法，將多個數字或數字陣列進行除法運算，並返回結果。
 *
 * @param args - 要進行除法運算的數字或數字陣列。
 * @returns - 除法運算的結果。
 *
 * @example
 * div(10, 2) // 5
 * div([10, 2]) // 5
 */
export const div = (...args: (number | number[])[]): number => {
  const [first, ...rest] = flat(args) as number[]
  return rest
    .reduce((acc: Big, val: number) => {
      return acc.div(val)
    }, Big(first))
    .toNumber()
}

/**
 * 將數字四捨五入到指定的小數位數。
 *
 * @param num - 要四捨五入的數字。
 * @param dp - 小數位數，預設為 2。
 * @returns 四捨五入後的數字。
 *
 * @example
 * round(1.2345) // 1.23
 * round(1.2345, 3) // 1.235
 */
export const round = (num: number, dp: number = 2): number => {
  return Big(num).round(dp).toNumber()
}
