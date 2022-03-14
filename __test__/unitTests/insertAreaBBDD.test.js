// After calculate a area of form add to BBDD.

const { AddBBDD } = require("../../calculator/insertAreaBBDD");

describe("Add to BBDD", () => {
  test("Insert into BBDD Square with side 5", () => {
    const form = AddBBDD("Square", 25);
    expect(form).toBe("OK");
  });
  test("Insert into BBDD Rectangle with side 5 and height 8", () => {
    const form = AddBBDD("Rectangle", 40);
    expect(form).toBe("OK");
  });
  test("Insert into BBDD Triangle with side 2 and height 10", () => {
    const form = AddBBDD("Triangle", 10);
    expect(form).toBe("OK");
  });
  test("No pass area return error", () => {
    const form = AddBBDD("Triangle");
    expect(form).toBeNull();
  });
});
