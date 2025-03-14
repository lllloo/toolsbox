import { describe, it, expect, vi, afterEach } from 'vitest'
import { getImageInfo, getScaleSize, resizeImage, getImageUrl, base64ToBlob } from '../image'

describe('取得圖片資訊', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })
  it('應該返回有效圖像 URL 的圖像寬度和高度', async () => {
    vi.stubGlobal(
      'Image',
      class {
        constructor() {
          this.width = 200
          this.height = 100
          this.src = ''
          this.onload = null
          this.onerror = null
        }
        set src(value) {
          this._src = value
          if (this.onload) {
            this.onload()
          }
        }
        get src() {
          return this._src
        }
      },
    )

    const result = await getImageInfo('url')
    expect(result).toEqual({ width: 200, height: 100 })
  })

  it('應該載入失敗', async () => {
    vi.stubGlobal(
      'Image',
      class {
        constructor() {
          this.src = ''
          this.onload = null
          this.onerror = null
        }
        set src(value) {
          this._src = value
          if (this.onerror) {
            this.onerror('error')
          }
        }
        get src() {
          return this._src
        }
      },
    )

    try {
      await getImageInfo('url')
    } catch (error) {
      expect(error).toBeDefined()
    }
  })
})

describe('取得縮放尺寸', () => {
  it('如果在最大尺寸範圍內，應返回原始尺寸', () => {
    const size = getScaleSize({ width: 100, height: 100, maxWidth: 200, maxHeight: 200 })
    expect(size).toEqual({ width: 100, height: 100 })
  })

  it('如果超過最大尺寸，應返回縮放尺寸', () => {
    const size = getScaleSize({ width: 300, height: 300, maxWidth: 200, maxHeight: 200 })
    expect(size).toEqual({ width: 200, height: 200 })
  })

  it('應該返回縮放尺寸，如果寬度和高度超過最大尺寸', () => {
    const size = getScaleSize({ width: 600, height: 300, maxWidth: 100, maxHeight: 100 })
    expect(size).toEqual({ width: 100, height: 50 })
  })
})

describe('調整圖片尺寸', () => {
  it('應該返回縮放後的圖片 URL', () => {
    // happy-dom 不支援 HTMLCanvasElement，所以這裡使用 jest 的 mock
    const canvas = document.createElement('canvas')
    const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue(canvas)
    const getContext = vi.spyOn(canvas, 'getContext').mockReturnValue({ drawImage: () => {} })
    const toDataURL = vi.spyOn(canvas, 'toDataURL').mockReturnValue('data:image/jpeg;base64,')

    const img = new Image()
    img.width = 300
    img.height = 300
    const dataUrl = resizeImage(img, 200, 200)
    expect(createElementSpy).toHaveBeenCalled()
    expect(getContext).toHaveBeenCalled()
    expect(toDataURL).toHaveBeenCalled()
    expect(dataUrl).toMatch(/^data:image\/jpeg;base64,/)
  })
})

describe('取得圖片網址', () => {
  window.URL.createObjectURL = vi.fn()
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('應該返回給定檔案的 URL', () => {
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('http://localhost/test')
    const file = new File([''], 'image.png', { type: 'image/png' })
    const url = getImageUrl(file)
    expect(url).toBe('http://localhost/test')
  })
})

describe('base64轉Blob', () => {
  it('應該將 base64 字串轉換為 Blob', () => {
    const base64 =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF////AAAAVcLTfgAAABJJREFUeJxjZGCsYPQAwgpGBgAJNgGHJv+ErAAAAABJRU5ErkJggg=='
    const blob = base64ToBlob(base64)
    expect(blob).toBeInstanceOf(Blob)
    expect(blob.type).toBe('image/png')
  })
})
