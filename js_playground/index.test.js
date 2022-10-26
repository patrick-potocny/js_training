import {capitalize, reverseString, calculator} from './index'

test('String capitalized', () => {
  expect(capitalize('string')).toBe('String')
})

test('String reversed', () => {
  expect(reverseString('string')).toBe('gnirts')
})

test('numbers added', () => {
  expect(calculator.add(2, 1)).toBe(3)
})

