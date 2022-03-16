const { AddBBDD } = require('./insertAreaBBDD')
const { checkForm } = require('./integrationCalculator')
const collection = 'areas'

const addAreaBBDD = (form, side, height = '') => {
  const area = checkForm(form, side, height)
  const BBDD = AddBBDD({ Shape: form, Area: area }, collection)
  return BBDD
}

module.exports = { addAreaBBDD }
