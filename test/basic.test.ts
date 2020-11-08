import * as path from 'path'
import getBadgeText from '../src'

describe('get badge text', () => {
  it('simple', () => {
    const filename = path.join(__dirname, 'test-lcov.info')
    expect(getBadgeText(filename)).toBe('91.64% covered')
  })
})
