// Get local time and return this
// Get local time and return yes it is afternoon, morning, night or evening

const { getTime, getMomentDay } = require('../../getTime/getTime')

describe('Get local time', () => {
  // Get local time and return this
  test('Get local time and return this', () => {
    const time = getTime()
    expect(time).toBeGreaterThanOrEqual(0)
    expect(time).toBeLessThan(24)
  })
  test('Get local time and return yes it is night ', () => {
    const getMoment = getMomentDay(2)
    expect(getMoment).toBe('night')
  })
  test('Get local time and return yes it is morning', () => {
    const getMoment = getMomentDay(9)
    expect(getMoment).toBe('morning')
  })
  test('Get local time and return yes it is afternoon', () => {
    const getMoment = getMomentDay(14)
    expect(getMoment).toBe('afternoon')
  })
  test('Get local time and return yes it is evening', () => {
    const getMoment = getMomentDay(22)
    expect(getMoment).toBe('evening')
  })
  test('Return error time', () => {
    const getMoment = getMomentDay(25)
    expect(getMoment).toBe('Error time')
  })
  test('Return error time', () => {
    const getMoment = getMomentDay('a')
    expect(getMoment).toBe('Error time')
  })
  test('Return null', () => {
    const getMoment = getMomentDay()
    expect(getMoment).toBeNull()
  })
})
