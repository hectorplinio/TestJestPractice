const { AddBBDD } = require("./insertAreaBBDD");
const { checkForm } = require("./integrationCalculator");

const addAreaBBDD = (form, side, height = "") => {
  const area = checkForm(form, side, height);
  const BBDD = AddBBDD(form, area);
  return area;
};

module.exports = { addAreaBBDD };
