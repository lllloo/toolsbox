import { describe, it, expect } from 'vitest'
import { checkTWID, checkPhoneNumber, checkEmail, checkUniformNumbers } from '../validate'

describe('驗證身分證 checkTWID', () => {
  it('空字串 錯誤', () => {
    expect(checkTWID()).toBe(false)
  })
  it('型態 錯誤', () => {
    expect(checkTWID(null)).toBe(false)
    expect(checkTWID({})).toBe(false)
    expect(checkTWID(1234567891)).toBe(false)
  })
  it('字數 錯誤', () => {
    expect(checkTWID('A12345678')).toBe(false)
    expect(checkTWID('A1234567891')).toBe(false)
  })
  it('計算驗證 錯誤', () => {
    expect(checkTWID('A123456788')).toBe(false)
    expect(checkTWID('A123456790')).toBe(false)
  })
  it('正常', () => {
    expect(checkTWID('a123456789')).toBe(true)
    expect(checkTWID('A123456789')).toBe(true)
  })
})

describe('驗證手機號碼 checkPhoneNumber', () => {
  it('錯誤', () => {
    expect(checkPhoneNumber('ascaseqwds')).toBe(false)
    expect(checkPhoneNumber('098765432')).toBe(false)
  })

  it('正常', () => {
    expect(checkPhoneNumber('0987654321')).toBe(true)
  })
})

describe('驗證電子信箱 checkEmail', () => {
  it('錯誤', () => {
    expect(checkEmail('a @gmail.com')).toBe(false)
    expect(checkEmail('@gmail.com')).toBe(false)
  })

  it('正常', () => {
    expect(checkEmail('a@gmail.com')).toBe(true)
  })
})

describe('驗證統一編號 checkUniformNumbers', () => {
  it('正常', () => {
    // 統一編號第7位數非
    expect(checkUniformNumbers('04595257')).toBe(true)
    expect(checkUniformNumbers('04595252')).toBe(true)
    // 統一編號第7位數為
    expect(checkUniformNumbers('10458575')).toBe(true)
    expect(checkUniformNumbers('10458574')).toBe(true)
    expect(checkUniformNumbers('10458570')).toBe(true)
    // error
    expect(checkUniformNumbers('10458571')).toBe(false)
    expect(checkUniformNumbers('10458572')).toBe(false)
    expect(checkUniformNumbers('10458573')).toBe(false)
  })

  it('錯誤', () => {
    expect(checkUniformNumbers('')).toBe(false)
    expect(checkUniformNumbers('10458571')).toBe(false)
    expect(checkUniformNumbers('10458572')).toBe(false)
    expect(checkUniformNumbers('10458573')).toBe(false)
    expect(checkUniformNumbers('10458576')).toBe(false)
    expect(checkUniformNumbers('10458577')).toBe(false)
    expect(checkUniformNumbers('10458578')).toBe(false)
  })
})
