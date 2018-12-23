/**
 * Returns the parent index in a heap
 */
export const parent = (i: number): number =>
  i === 0 ? 0 : Math.floor((i - 1) / 2)
