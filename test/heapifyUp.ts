import * as assert from 'assert'
import {heapifyUp} from '../src/heapifyUp'

describe('heapifyUp', () => {
  const heapify = heapifyUp<number>((a, b) => a - b)
  it('should heapify', () => {
    /**
     *    Sample Tree (Min Heap)
     *         0
     *       /   \
     *      5     10
     *     /
     *    3
     */
    assert.deepStrictEqual(heapify([0, 5, 10, 3]), [0, 3, 10, 5])

    /**
     *    Sample Tree (Min Heap)
     *         0
     *       /   \
     *      5     10
     *     / \
     *    15  3
     */
    assert.deepStrictEqual(heapify([0, 5, 10, 15, 3]), [0, 3, 10, 15, 5])

    /**
     *    Sample Tree (Min Heap)
     *          1
     *       /     \
     *      5       10
     *     / \     /
     *    15  20  0
     */
    assert.deepStrictEqual(heapify([1, 5, 10, 15, 20, 0]), [
      0,
      5,
      1,
      15,
      20,
      10
    ])

    /**
     *    Sample Tree (Min Heap)
     *         5
     *       /
     *      1
     */
    assert.deepStrictEqual(heapify([5, 1]), [1, 5])

    /**
     *    Sample Tree (Min Heap)
     *         5
     *       /   \
     *      10    1
     */
    assert.deepStrictEqual(heapify([5, 10, 1]), [1, 10, 5])

    /**
     *    Sample Tree (Min Heap)
     *         1
     */
    assert.deepStrictEqual(heapify([1]), [1])
  })
})
