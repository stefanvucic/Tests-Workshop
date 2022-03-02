import { users } from './mockedData'

export const fakeFetch = (axios = false, ok = true): jest.MockedFunction<any> => {
  if(!ok) {
    return jest.fn(() => Promise.reject('Some ERROR'))
  }
  if (!axios) {
    return jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(users),
      })
    )
  }
  return jest.fn(() => Promise.resolve({ data: users }))
}