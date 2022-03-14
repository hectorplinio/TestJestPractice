// Return moment of day

const { getTimeAndMoment } = require("../../getTime/integrationMoment");

describe("Get moment of day", () => {
  test("Return moment of day", () => {
    const moments = ["afternoon", "morning", "night", "evening"];
    const getMoment = getTimeAndMoment();
    expect(moments).toContain(getMoment);
  });
});
