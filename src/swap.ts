/**
 * Swaps two elements in an array
 */
export const swap = <T>(q: T[], a: number, b: number): void => {
  const [aItem, bItem] = [q[a], q[b]]
  q[a] = bItem
  q[b] = aItem
}
