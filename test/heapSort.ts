import * as assert from 'assert'
import {Comparer} from '../src/comparer'
import {heapSort} from '../src/heapSort'

describe('heapSort', () => {
  const randomInt = (max: number) => Math.round(Math.random() * max)
  const randomNumbers = (n: number) =>
    Array.from({length: n}, () => randomInt(n))
  const sort = heapSort((a: number, b: number) => a - b)

  it('should sort random elements', () => {
    const elmA = randomNumbers(randomInt(100))
    const elmB = elmA.slice()

    const actual = sort(elmA)
    const expected = elmB.sort((a, b) => a - b)

    assert.deepStrictEqual(actual, expected, `input: [${elmA.join(', ')}]`)
  })

  it('should sort [2, 3, 1, 5, 1]', () => {
    const actual = sort([2, 3, 1, 5, 1])
    const expected = [1, 1, 2, 3, 5]
    assert.deepStrictEqual(actual, expected)
  })

  it('should sort [8, 3, 4, 1, 0, 5, 1, 0, 2, 7]', () => {
    const actual = sort([8, 3, 4, 1, 0, 5, 1, 0, 2, 7])
    const expected = [0, 0, 1, 1, 2, 3, 4, 5, 7, 8]
    assert.deepStrictEqual(actual, expected)
  })
})
