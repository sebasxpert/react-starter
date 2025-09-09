import { test, expect } from 'vitest'
import { createStore } from 'jotai'
import { count } from '@/store/count'

test('increments count (atom, no React)', () => {
  const store = createStore()
  // initial value
  expect(store.get(count)).toBe(0)
  // update via store.set
  store.set(count, (c: number) => c + 1)
  expect(store.get(count)).toBe(1)
})
