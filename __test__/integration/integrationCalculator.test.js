// Depending on what form it has to do one function or another

const { checkForm } = require("../../calculator/integrationCalculator");

describe("Calculator Area", () => {
  test("Check name of Square and do area function and return area 25", () => {
    const form = checkForm("Square", 5);
    expect(form).toBe(25);
  });
  test("Check name of Rectangle and do area function and return area 32", () => {
    const form = checkForm("Rectangle", 4, 8);
    expect(form).toBe(32);
  });
  test("Check name of Triangle and do area function and return area 120", () => {
    const form = checkForm("Triangle", 12, 20);
    expect(form).toBe(120);
  });
  test("Check name of empy and return Form is empty", () => {
    const form = checkForm("");
    expect(form).toBe("Form is empty");
  });
  test("Check name of other shape and return null", () => {
    const form = checkForm("Octagon");
    expect(form).toBeNull();
  });
});
