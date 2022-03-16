const getTime = () => {
  return new Date().getHours()
}

const getMomentDay = (localTime) => {
  if (!localTime) return null
  if (localTime >= 0 && localTime < 6) return 'night'
  if (localTime >= 6 && localTime < 12) return 'morning'
  if (localTime >= 12 && localTime < 18) return 'afternoon'
  if (localTime >= 18 && localTime <= 23) return 'evening'
  return 'Error time'
}

module.exports = { getTime, getMomentDay }
