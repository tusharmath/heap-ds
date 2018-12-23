import {Comparer} from './comparer'
import {heapifyDown} from './heapifyDown'
import {heapifyUp} from './heapifyUp'

export class Heap<T = number> {
  public readonly queue: T[] = []

  public constructor(private readonly cmp: Comparer<T>) {}

  public isEmpty(): boolean {
    return this.queue.length === 0
  }

  public peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    return this.queue[0]
  }

  public pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    const h = this.queue[0]
    const e = this.queue.pop() as T

    if (!this.isEmpty()) {
      this.queue[0] = e
      heapifyDown(this.cmp)(this.queue)
    }

    return h
  }

  public push(item: T): Heap<T> {
    this.queue.push(item)
    heapifyUp(this.cmp)(this.queue)

    return this
  }
}
