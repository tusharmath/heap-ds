import {Comparer} from './comparer'
import {left} from './left'
import {right} from './right'
import {swap} from './swap'

export const heapifyDown = <T>(cmp: Comparer<T>) => (q: T[]): T[] => {
  let i = 0
  const max = q.length - 1
  while (i <= max) {
    const l = left(i)
    const r = right(i)

    if (l <= max && r <= max) {
      const s = cmp(q[l], q[r]) > 0 ? r : l
      if (cmp(q[i], q[s]) > 0) {
        swap(q, s, i)
        i = s
      } else {
        break
      }
    } else if (r > max && cmp(q[i], q[l]) > 0) {
      swap(q, l, i)
      break
    } else {
      break
    }
  }

  return q
}
