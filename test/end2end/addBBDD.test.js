// After calculate a area of form add to BBDD.

const { addAreaBBDD } = require('../../calculator/addBBDD')

describe('Add to BBDD', () => {
  test('First check the shape and after calculate the area and add to BBDD, return OK', () => {
    const form = addAreaBBDD('Square', 5)
    expect(form).toBe('OK')
  })
  test('First check the shape and after calculate the area and add to BBDD, return OK', () => {
    const form = addAreaBBDD('Rectangle', 5, 8)
    expect(form).toBe('OK')
  })
  test('First check the shape and after calculate the area and add to BBDD, return OK', () => {
    const form = addAreaBBDD('Triangle', 2, 10)
    expect(form).toBe('OK')
  })
  test('First check the shape and after pass only 1 parameter return null', () => {
    const form = addAreaBBDD('Triangle', 2)
    expect(form).toBeNull()
  })
})
