import * as assert from 'assert'
import {heapifyDown} from '../src/heapifyDown'

describe('heapifyDown', () => {
  const heapify = heapifyDown<number>((a, b) => a - b)
  it('should heapify', () => {
    /**
     *    Sample Tree (Min Heap)
     *         3
     *       /   \
     *      2     1
     */
    assert.deepStrictEqual(heapify([3, 2, 1]), [1, 2, 3])

    /**
     *    Sample Tree (Min Heap)
     *         3
     *       /
     *      2
     */
    assert.deepStrictEqual(heapify([3, 2]), [2, 3])

    /**
     *    Sample Tree (Min Heap)
     *         7
     *       /   \
     *      2     3
     *     / \   /
     *    4   5 6
     */
    assert.deepStrictEqual(heapify([7, 2, 3, 4, 5, 6]), [2, 4, 3, 7, 5, 6])

    /**
     *    Sample Tree (Min Heap)
     *         7
     */
    assert.deepStrictEqual(heapify([7]), [7])

    /**
     *    Sample Tree (Min Heap)
     *         3
     *        /
     *       5
     */
    assert.deepStrictEqual(heapify([3, 5]), [3, 5])
  })
})
