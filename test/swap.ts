import * as assert from 'assert'
import {swap} from '../src/swap'

describe('swap()', () => {
  it('should swap two elements', () => {
    // Create Input
    const actual = [1, 2]

    // Swap the elements
    swap(actual, 0, 1)
    const expected = [2, 1]

    // Assert
    assert.deepStrictEqual(actual, expected)
  })
})
