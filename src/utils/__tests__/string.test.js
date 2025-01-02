import { describe, it, expect, afterEach, vi } from 'vitest'

describe('getUUID', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('應該使用 crypto.randomUUID 生成有效的 UUID', () => {
    const uuid = getUUID()
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  })

  it('當 crypto.randomUUID 不可用拋出錯誤時，應該使用後備方法生成有效的 UUID', () => {
    vi.spyOn(crypto, 'randomUUID').mockImplementation(() => {
      throw new Error('測試錯誤')
    })
    const uuid = getUUID()
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  })
})
