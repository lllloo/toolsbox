import { describe, it, expect, vi, afterEach } from 'vitest'

const html = `
<div id="app">
  <img src="https://picsum.photos/1" />
  <h1>hello</h1>
  <p>world</p>
  <img src="https://picsum.photos/2" />
</div>   
`
describe('取得所有img', () => {
  it('正常', () => {
    var arr = getHtmlImg(html)
    expect(arr.length).toBe(2)
    expect(arr).toMatchInlineSnapshot(`
      [
        "https://picsum.photos/1",
        "https://picsum.photos/2",
      ]
    `)
  })
})

describe('檢查中文', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('檢查是否只有中文', () => {
    expect(checkChinese('你好')).toBe(true)
    expect(checkChinese('鿾')).toBe(true)
    expect(checkChinese('Hello')).toBe(false)
    expect(checkChinese('123')).toBe(false)
    expect(checkChinese('中文123')).toBe(false)
    expect(checkChinese('123中文')).toBe(false)
  })

  it('檢查是否只有中文 不支援狀況 true', () => {
    vi.spyOn(RegExp.prototype, 'test').mockImplementationOnce(() => {
      throw new Error(
        'SyntaxError: Invalid regular expression: /\\p{Unified_Ideograph}+$/u: Invalid escape',
      )
    })
    expect(checkChinese('你好')).toBe(true)
  })

  it('檢查是否只有中文 不支援狀況 false', () => {
    vi.spyOn(RegExp.prototype, 'test').mockImplementationOnce(() => {
      throw new Error(
        'SyntaxError: Invalid regular expression: /\\p{Unified_Ideograph}+$/u: Invalid escape',
      )
    })
    expect(checkChinese('Hello')).toBe(false)
  })
})
