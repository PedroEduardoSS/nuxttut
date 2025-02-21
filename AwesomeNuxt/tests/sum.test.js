import { test, expect } from 'vitest'

function sum(a, b) {
 return a + b
}

test('adiciona 2 números', () => {
 expect(sum(2, 3)).toEqual(5)
})