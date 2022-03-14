const { getTime, getMomentDay } = require("./getTime");

const getTimeAndMoment = () => {
  const time = getTime();
  const timeAndMoment = getMomentDay(time);
  return timeAndMoment;
};
module.exports = { getTimeAndMoment };
