import { getLocation } from '../getLocation'

describe('getLocation tests', () => {
  it('returns correct location', () => {
    const location = getLocation(1, 1)
    expect(location).toBe('N-E')
  })
  it('returns that one or both of the coordinates is in center', () => {
    const location = getLocation(1, 0)
    expect(location).toBe('One or both of the coordinates is in center')
  })
  it('returns correct location', () => {
    const location = getLocation(1, 1)
    expect(location).not.toBe('N-W')
  })
})
