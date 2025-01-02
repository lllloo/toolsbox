/**
 * 從給定的 URL 獲取圖片資訊。
 *
 * @param url - 圖片的 URL。
 * @returns 包含圖片寬度和高度的 Promise。
 * @throws 如果圖片加載失敗，則返回錯誤。
 */
export const getImageInfo = async (url: string) => {
  const img = new Image()
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = (error) => {
      reject(error)
    }
    img.src = url
  })
}

/**
 * 計算圖片在保持其縱橫比的情況下的縮放尺寸。
 * 如果圖片小於最大尺寸，則返回原始尺寸。
 *
 * @param {Object} params - 包含圖片尺寸的參數物件。
 * @param {number} params.width - 圖片的原始寬度。
 * @param {number} params.height - 圖片的原始高度。
 * @param {number} params.maxWidth - 縮放圖片的最大允許寬度。
 * @param {number} params.maxHeight - 縮放圖片的最大允許高度。
 * @returns {Object} 包含圖片縮放後的寬度和高度的物件。
 */
export const getScaleSize = ({
  width,
  height,
  maxWidth,
  maxHeight,
}: {
  width: number
  height: number
  maxWidth: number
  maxHeight: number
}) => {
  if (width <= maxWidth && height <= maxHeight) {
    return { width, height }
  }
  const scale = Math.min(maxWidth / width, maxHeight / height)
  return {
    width: width * scale,
    height: height * scale,
  }
}

/**
 * 將圖片調整為在指定的最大寬度和高度內，同時保持縱橫比。
 *
 * @param img - 要調整大小的 HTMLImageElement。
 * @param maxWidth - 調整後圖片的最大寬度。
 * @param maxHeight - 調整後圖片的最大高度。
 * @returns 包含調整後圖片的 JPEG 格式表示的數據 URL。
 */
export const resizeImage = (img: HTMLImageElement, maxWidth: number, maxHeight: number) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const { width, height } = getScaleSize({
    width: img.width,
    height: img.height,
    maxWidth,
    maxHeight,
  })
  canvas.width = width
  canvas.height = height

  ctx.drawImage(img, 0, 0, width, height)
  return canvas.toDataURL('image/jpeg')
}

/**
 * 根據給定的檔案生成對應的圖片 URL。
 *
 * @param file - 要生成 URL 的檔案。
 * @returns 對應檔案的圖片 URL。
 */
export const getImageUrl = (file: File) => URL.createObjectURL(file)

/**
 * 將 base64 字串轉換為 Blob 物件。
 *
 * @param base64 - 要轉換的 base64 編碼字串。
 * @param type - 生成的 Blob 的 MIME 類型。預設為 'image/png'。
 * @returns 表示 base64 字串二進位數據的 Blob 物件。
 *
 * @example
 * const base64 = 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABjElEQVRIS+2VvUoDQRSGv7VQ
 * base64ToBlob(base64).then((blob) => {
 *   console.log(blob)
 * })
 */
export const base64ToBlob = (base64: string, type = 'image/png') => {
  const binStr = window.atob(base64.split(',')[1])
  const len = binStr.length
  const arr = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i)
  }
  return new Blob([arr], { type })
}
