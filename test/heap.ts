import * as assert from 'assert'
import {Heap} from '..'
import {Comparer} from '../src/comparer'

describe('heap', () => {
  const cmp: Comparer<number> = (a, b) => a - b
  describe('isEmpty()', () => {
    it('should return true', () => {
      const h = new Heap(cmp)
      assert.ok(h.isEmpty())
    })

    it('should return false', () => {
      const h = new Heap(cmp).push(10)
      assert.ok(!h.isEmpty())
    })
  })

  describe('push/pop()', () => {
    it('should push/pop', () => {
      const h = new Heap(cmp).push(10)
      const actual = h.pop()
      assert.strictEqual(actual, 10)
      assert.ok(h.isEmpty())
    })

    it('should push/pop in sorted order', () => {
      const h = new Heap(cmp).push(10).push(5)
      const actual = h.pop()
      assert.strictEqual(actual, 5)
      assert.ok(!h.isEmpty())
    })

    it('should push/pop in sorted order (2, 5, 3)', () => {
      const h = new Heap(cmp)
        .push(2)
        .push(5)
        .push(3)

      assert.deepStrictEqual(h.queue, [2, 5, 3])
      assert.strictEqual(h.pop(), 2)
      assert.deepStrictEqual(h.queue, [3, 5])
    })
  })

  describe('peek()', () => {
    it('should return head', () => {
      const h = new Heap(cmp).push(10)
      const actual = h.peek()
      assert.strictEqual(actual, 10)
      assert.ok(!h.isEmpty())
    })
  })
})
