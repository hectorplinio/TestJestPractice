// Check if email is correctly
// Check if password1 and password2 is equal

// import {checkEmail, validatePass} from "./practice";

const { checkEmail, validatePass } = require('../../checkMail/checkMailAndPass')

describe('Email check', () => {
  // Check if email is correctly
  test('Check if email is correctly', () => {
    const input = [
      { id: 1, mail: 'hectorplinio@gmail.com' },
      { id: 2, mail: 'hectorpliniogmail.com' },
      { id: 3, mail: 'hectorplinio@gmail' }
    ]
    const output = [{ id: 1, mail: 'hectorplinio@gmail.com' }]
    const result = checkEmail(input)
    expect(result).toEqual(output)
  })
  test('Check if 2 emails in array is correctly', () => {
    const input = [
      { id: 1, mail: 'hectorplinio@gmail.com' },
      { id: 2, mail: 'hectorpliniogmail.com' },
      { id: 3, mail: 'hectorplinio@gmail' },
      { id: 4, mail: 'juanito@gmail.com' }
    ]
    const output = [
      { id: 1, mail: 'hectorplinio@gmail.com' },
      { id: 4, mail: 'juanito@gmail.com' }
    ]
    const result = checkEmail(input)
    expect(result).toEqual(output)
  })
})
describe('Password check', () => {
  // Check if password1 and password2 is equal
  test('Check if password1 and password2 is equal', () => {
    const input = [
      { id: 1, password1: '1234', password2: '1234' },
      { id: 2, password1: '1234', password2: '123' },
      { id: 3, password1: '1234', password2: '1235' }
    ]
    const output = [{ id: 1, password1: '1234', password2: '1234' }]
    const result = validatePass(input)
    expect(result).toEqual(output)
  })
  // Check if password1 and password2 is equal
  test('Check if password1 and password2 is equal for more people', () => {
    const input = [
      { id: 1, password1: '1234', password2: '1234' },
      { id: 2, password1: '1234', password2: '123' },
      { id: 3, password1: '1234', password2: '1235' },
      { id: 4, password1: '12345', password2: '12345' }
    ]
    const output = [
      { id: 1, password1: '1234', password2: '1234' },
      { id: 4, password1: '12345', password2: '12345' }
    ]
    const result = validatePass(input)
    expect(result).toEqual(output)
  })
})
