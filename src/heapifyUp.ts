import {Comparer} from './comparer'
import {parent} from './parent'
import {swap} from './swap'

export const heapifyUp = <T>(cmp: Comparer<T>) => (q: T[]): T[] => {
  let i = q.length - 1

  while (i > 0) {
    const p = parent(i)
    const a = q[i]
    const b = q[p]
    if (cmp(a, b) < 0) {
      swap(q, i, p)
    }
    i = p
  }

  return q
}
