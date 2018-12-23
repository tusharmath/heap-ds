import * as assert from 'assert'
import {parent} from '../src/parent'

describe('parent()', () => {
  it('should return the parent value', () => {
    /**
     *         Sample Tree
     *              0
     *           /     \
     *          1       2
     *         / \     / \
     *        3   4   5   6
     */
    assert.strictEqual(parent(0), 0)
    assert.strictEqual(parent(1), 0)
    assert.strictEqual(parent(2), 0)
    assert.strictEqual(parent(3), 1)
    assert.strictEqual(parent(4), 1)
  })
})
