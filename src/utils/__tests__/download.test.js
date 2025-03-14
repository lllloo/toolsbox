import { describe, it, expect, vi, afterEach } from 'vitest'
import { getDownloadFile, downloadBlob, downloadFile } from '../download'

describe('取得下載檔案', () => {
  it('應該使用正確的Blob呼叫downloadBlob', () => {
    const mockResponse = {
      data: new Blob(['測試數據'], { type: 'text/plain' }),
      headers: { 'content-type': 'text/plain' },
    }
    const mockFn = vi.fn()
    getDownloadFile(mockResponse, mockFn)
    expect(mockFn).toHaveBeenCalledWith(mockResponse.data)
  })
})

describe('下載Blob', () => {
  window.URL.createObjectURL = vi.fn()
  window.URL.revokeObjectURL = vi.fn()
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('應該建立一個物件網址並觸發下載', () => {
    const blob = new Blob(['test'], { type: 'text/plain' })
    const mockUrl = 'blob:http://example.com/blob'
    const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL').mockReturnValue(mockUrl)
    const revokeObjectURLSpy = vi.spyOn(window.URL, 'revokeObjectURL')
    const mockDownloadFile = vi.fn()

    downloadBlob(blob, mockDownloadFile)

    expect(mockDownloadFile).toHaveBeenCalled()
    expect(createObjectURLSpy).toHaveBeenCalledWith(blob)
    expect(revokeObjectURLSpy).toHaveBeenCalledWith(mockUrl)
  })

  it('如果未提供函數，應該使用預設的下載檔案函數', () => {
    const blob = new Blob(['test'], { type: 'text/plain' })
    const mockUrl = 'blob:http://example.com/blob'

    const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL').mockReturnValue(mockUrl)
    const revokeObjectURLSpy = vi.spyOn(window.URL, 'revokeObjectURL')
    const clickSpy = vi.fn()
    vi.spyOn(document, 'createElement').mockReturnValue({ click: clickSpy })

    downloadBlob(blob)

    expect(clickSpy).toHaveBeenCalled()
    expect(createObjectURLSpy).toHaveBeenCalledWith(blob)
    expect(revokeObjectURLSpy).toHaveBeenCalledWith(mockUrl)
  })
})

describe('下載檔案', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('應該建立一個連結並觸發下載', () => {
    const link = document.createElement('a')
    link.click = vi.fn()
    vi.spyOn(document, 'createElement').mockReturnValue(link)

    downloadFile('http://example.com/file.txt', 'file.txt')

    expect(link.href).toBe('http://example.com/file.txt')
    expect(link.download).toBe('file.txt')
    expect(link.click).toHaveBeenCalled()
  })
})
