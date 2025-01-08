/**
 * 取得分頁列表
 * @param {Number} current 當前頁面
 * @param {Number} pageCount 總共幾頁
 * @param {Number} totalToDisplayPage 總共顯示幾頁
 * @returns {Array} 分頁列表
 * @example
 * getShowPageList(1, 10, 5) // [1, 2, 3, 4, 5]
 */
export const getShowPageList = (current: number, pageCount: number, totalToDisplayPage: number) => {
  const pages = []
  const maxPagesToShow = totalToDisplayPage
  let startPage, endPage

  if (pageCount <= maxPagesToShow) {
    startPage = 1
    endPage = pageCount
  } else {
    if (current <= Math.ceil(maxPagesToShow / 2)) {
      startPage = 1
      endPage = maxPagesToShow
    } else if (current + Math.floor(maxPagesToShow / 2) >= pageCount) {
      startPage = pageCount - maxPagesToShow + 1
      endPage = pageCount
    } else {
      startPage = current - Math.floor(maxPagesToShow / 2)
      endPage = current + Math.floor(maxPagesToShow / 2)
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  // if (startPage > 1) pages.unshift('...')
  // if (endPage < pageCount) pages.push('...')

  return pages
}
