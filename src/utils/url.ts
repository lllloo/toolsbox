import qs from 'qs'

type ParseParameters = Parameters<typeof qs.parse>
type StringifyParameters = Parameters<typeof qs.stringify>
/**
 * 解析 URL 中的查詢參數。
 *
 * @param url - 要解析的 URL 字串(預設忽略前綴問號)。
 * @param options - 傳遞給 `qs.parse` 的選項參數。
 * @returns 解析後的查詢參數物件。
 * const url = '?name=John&age=30';
 * getQueryParams(url); // { name: 'John', age: '30' }
 */
export const getQueryParams = (url: string, options: ParseParameters[1]) => {
  return qs.parse(url, {
    ignoreQueryPrefix: true /* 忽略前綴問號 */,
    ...options,
  })
}

/**
 * 將物件轉換為 URL 查詢字符串(預設arrayFormat使用repeat)。
 *
 * @param params - 包含查詢參數的物件。
 * @param options - 轉換選項。
 * @returns URL 查詢字符串。
 *
 * @example
 * const params = { name: 'John', age: '30' , a: ['b', 'c'] };
 * objectToQueryString(params, {arrayFormat: 'repeat'}); // 'name=John&age=30&a=b&a=c'
 */
export function objectToQueryString(
  params: StringifyParameters[0],
  options: StringifyParameters[1],
) {
  return qs.stringify(params, {
    arrayFormat: 'repeat',
    ...options,
  })
}

/**
 * 從 URL 中取得搜尋參數的物件。
 * @param {string} url - 要解析的 URL 字串。
 * @returns {Object} 包含搜尋參數的物件。
 * @example getParams(window.location.search)
 */
export const simpleGetQueryParams = (url: string) => {
  const params = new URLSearchParams(url)

  return Array.from(params.entries()).reduce<Record<string, string | string[]>>(
    (result, [key, value]) => {
      if (key in result) {
        result[key] = Array.isArray(result[key])
          ? [...(result[key] as string[]), value]
          : [result[key] as string, value]
      } else {
        result[key] = value
      }
      return result
    },
    {},
  )
}

/**
 * 將物件轉換為 URL 查詢字串。
 * @param {{ [key: string]: string|number }} obj - 包含查詢參數的物件。
 * @returns {string} - URL 查詢字串。
 */
export const simpleObjectToQueryString = (obj: Record<string, string | number>) => {
  return Object.entries(obj)
    .flatMap(([key, value]) =>
      Array.isArray(value)
        ? value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
        : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&')
}
