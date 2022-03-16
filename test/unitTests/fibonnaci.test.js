// Create a progam that you pass a number and return fibonnaci sequence

const { getFibonnaci } = require('../../fibonacci/fibonnaci.js')

describe('Fibonnaci sequence', () => {
  test('Create a progam that you pass a 2 and return fibonnaci sequence position 2', () => {
    expect(getFibonnaci(2)).toBe(1)
  })
  test('Create a progam that you pass a 3 and return fibonnaci sequence position 3', () => {
    expect(getFibonnaci(3)).toBe(2)
  })
  test('Create a progam that you pass a 10 and return fibonnaci sequence position 10', () => {
    expect(getFibonnaci(10)).toBe(55)
  })
  test('Create a progam that you pass a 40 and return fibonnaci sequence position 40', () => {
    expect(getFibonnaci(40)).toBe(102334155)
  })
  test('Create a progam that you pass a String and return null', () => {
    expect(getFibonnaci('Hola')).toBeNull()
  })
  test('Create a progam that you pass empty and return null', () => {
    expect(getFibonnaci()).toBeNull()
  })
})
