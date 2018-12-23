import {Comparer} from './comparer'
import {Heap} from './heap'

export const heapSort = <T>(cmp: Comparer<T>) => (list: T[]): T[] => {
  const result: T[] = []
  const heap = new Heap(cmp)

  list.forEach(_ => heap.push(_))
  while (!heap.isEmpty()) {
    result.push(heap.pop() as T)
  }

  return result
}
