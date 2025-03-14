import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import { baseGet, basePost } from '../request'
import * as alertModule from '@/utils/alert'

const server = setupServer()
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('axios success', () => {
  it('baseGet', async () => {
    server.use(
      http.get('/api/user', () => {
        return HttpResponse.json({ username: 'admin' })
      }),
    )

    const data = { username: 'admin' }
    const res = await baseGet('/user')
    expect(res).toEqual(data)
  })

  it('basePost', async () => {
    server.use(
      http.post('/api/user', () => {
        return HttpResponse.json({ username: 'admin' })
      }),
    )
    const data = { username: 'admin' }
    const res = await basePost('/user')
    expect(res).toEqual(data)
  })
})

describe('axios error', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('baseGet 401', async () => {
    const spyAlert = vi.spyOn(alertModule, 'alertError')
    server.use(
      http.get('/api/hasToken', () => {
        return new HttpResponse(null, {
          status: 401,
        })
      }),
    )
    try {
      await baseGet('/hasToken')
    } catch (error) {
      expect(error.response.status).toEqual(401)
      expect(spyAlert).toHaveBeenCalled()
    }
  })

  it('basePost 401', async () => {
    const spyAlert = vi.spyOn(alertModule, 'alertError')
    server.use(
      http.post('/api/hasToken', () => {
        return new HttpResponse(null, {
          status: 401,
        })
      }),
    )
    try {
      await basePost('/hasToken')
    } catch (error) {
      expect(error.response.status).toEqual(401)
      expect(spyAlert).toHaveBeenCalled()
    }
  })
})
