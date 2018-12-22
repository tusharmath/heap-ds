export interface IQueueItem<T> {
  item: T
  priority: number
}

type Queue<T> = Array<IQueueItem<T>>

/**
 * Returns a - b in case of numbers
 * ie. a > b ? +1
 *     a < b ? -1
 *     a = b ?  0
 */
type Comparer<T> = (a: T, b: T) => number

/**
 * Returns the parent index in a heap
 */
export const parent = (i: number): number =>
  i === 0 ? 0 : Math.floor((i - 1) / 2)

export const left = (i: number): number => i * 2 + 1

export const right = (i: number): number => i * 2 + 2

/**
 * Swaps two elements in an array
 */
export const swap = <T>(q: T[], a: number, b: number): void => {
  const [aItem, bItem] = [q[a], q[b]]
  q[a] = bItem
  q[b] = aItem
}
/**
 * Creates a min heap
 */
export const minHeapifyUp = <T>(q: T[], i: number, cmp: Comparer<T>): void => {
  let iParent = parent(i)
  let n = i
  while (cmp(q[n], q[iParent]) < 0) {
    swap(q, n, iParent)
    n = iParent
    iParent = parent(n)
  }
}

export const smallest = <T>(q: T[], i: number, cmp: Comparer<T>): number => {
  const len = q.length
  const iLeft = left(i)
  const iRight = right(i)
  if (iLeft < len && iRight < len) {
    return cmp(q[iLeft], q[iRight]) > 0 ? iRight : iLeft
  }
  if (iRight < len) {
    return iRight
  }
  if (iLeft < len) {
    return iLeft
  }

  return i
}

export const minHeapifyDown = <T>(q: T[], i: number, cmp: Comparer<T>): T[] => {
  let n = i
  let iSmallest = smallest(q, n, cmp)
  while (cmp(q[iSmallest], q[n]) < 0) {
    swap(q, iSmallest, n)
    n = iSmallest
    iSmallest = smallest(q, n, cmp)
  }

  return q
}

export const priorities = <T>(q: PriorityQueue<T>): number[] =>
  q.queue.map(_ => _.priority)

export const queueComparer = <T>(a: IQueueItem<T>, b: IQueueItem<T>): number =>
  a.priority - b.priority

export class PriorityQueue<T = number> {
  public readonly queue: Queue<T> = new Array<IQueueItem<T>>()

  public isEmpty(): boolean {
    return this.queue.length === 0
  }

  public peek(): T | undefined {
    if (this.queue.length === 0) {
      return undefined
    }

    return this.queue[0].item
  }

  public pull(): T | undefined {
    const r = this.peek()
    const i = this.queue.pop()

    if (i !== undefined && this.queue.length > 0) {
      this.queue[0] = i
      minHeapifyDown(this.queue, 0, queueComparer)
    }

    return r
  }
  public push(priority: number, item: T): PriorityQueue<T> {
    this.queue.push({priority, item})
    minHeapifyUp(this.queue, this.queue.length - 1, queueComparer)

    return this
  }
}
