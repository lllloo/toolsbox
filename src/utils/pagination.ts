/**
 * 取得分頁列表
 * @param {Number} current 當前頁面
 * @param {Number} pageCount 總頁數
 * @param {Number} maxVisiblePages 最大可見頁數
 * @returns {Number[]} 分頁列表
 * @example
 * getShowPageList(1, 10, 5) // [1, 2, 3, 4, 5]
 */
export const getShowPageList = (
  current: number,
  pageCount: number,
  maxVisiblePages: number,
): number[] => {
  // 參數驗證與預處理
  const validCurrent = Math.max(1, Math.min(current, pageCount))
  const validMaxVisible = Math.max(1, maxVisiblePages)

  // 如果總頁數小於等於最大可見頁數，直接返回所有頁碼
  if (pageCount <= validMaxVisible) {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }

  // 計算開始和結束頁碼
  let startPage: number
  let endPage: number

  const half = Math.floor(validMaxVisible / 2)

  if (validCurrent <= half + 1) {
    // 當前頁在前半部分
    startPage = 1
    endPage = validMaxVisible
  } else if (validCurrent >= pageCount - half) {
    // 當前頁在後半部分
    startPage = pageCount - validMaxVisible + 1
    endPage = pageCount
  } else {
    // 當前頁在中間
    startPage = validCurrent - half
    endPage = validCurrent + validMaxVisible - half - 1
  }

  // 生成頁碼陣列
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
}
