/**
 * 請求下載檔案
 * @param response - 下載的回應物件。
 * @param fn - 處理 Blob 的函數。
 * @returns {Promise<void>}
 */
export const getDownloadFile = (
  response: { data: Blob; headers: { [key: string]: string } },
  fn: (blob: Blob) => void = downloadBlob,
): void => {
  const blob = new Blob([response.data], { type: response.headers['content-type'] })
  fn(blob)
}

/**
 * 下載給定的 Blob 物件為檔案。
 *
 * @param blob - 要下載的 Blob 物件。
 */
export const downloadBlob = (blob: Blob, fn = downloadFile) => {
  const url = window.URL.createObjectURL(blob)
  fn(url, 'file')
  window.URL.revokeObjectURL(url)
}

/**
 * 下載檔案的函數。
 *
 * @param url - 要下載的檔案的 URL。
 * @param name - 下載後檔案的名稱。
 */
export const downloadFile = (url: string, name: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = name
  link.click()
}
