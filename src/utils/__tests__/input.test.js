import { describe, it, expect } from 'vitest'

describe('測試 pasteWord', () => {
  it('測試貼上文字', async () => {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = 'hello  world'
    textarea.selectionStart = 6
    textarea.selectionEnd = 6
    document.body.appendChild(textarea)
    pasteWord(textarea, 'goodbye')
    expect(textarea.value).toBe('hello goodbye world')
    expect(textarea.selectionStart).toBe(13)
  })

  it('測試 沒帶參數', async () => {
    expect(pasteWord(null, 'goodbye')).toBe(undefined)
  })
})
