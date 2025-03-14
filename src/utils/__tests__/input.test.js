import { describe, it, expect } from 'vitest'
import { pasteWord } from '../input'

describe('測試貼上文字', () => {
  it('測試貼上文字到文字區域', async () => {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = 'hello  world'
    textarea.selectionStart = 6
    textarea.selectionEnd = 6
    document.body.appendChild(textarea)
    pasteWord(textarea, 'goodbye')
    expect(textarea.value).toBe('hello goodbye world')
    expect(textarea.selectionStart).toBe(13)
  })

  it('測試沒帶參數', async () => {
    expect(pasteWord(null, 'goodbye')).toBe(undefined)
  })
})
