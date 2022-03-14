// After calculate a area of form add to BBDD.

const { addAreaBBDD } = require("../../calculator/addBBDD");

describe("Add to BBDD", () => {
  test("After calculate a area of form add to BBDD", () => {
    const form = addAreaBBDD("Square", 5);
    expect(form).toBe(25);
  });
  test("After calculate a area of form add to BBDD", () => {
    const form = addAreaBBDD("Rectangle", 5, 8);
    expect(form).toBe(40);
  });
  test("After calculate a area of form add to BBDD", () => {
    const form = addAreaBBDD("Triangle", 2, 10);
    expect(form).toBe(10);
  });
  test("Only 1 parameter", () => {
    const form = addAreaBBDD("Triangle", 2);
    expect(form).toBeNull();
  });
});
