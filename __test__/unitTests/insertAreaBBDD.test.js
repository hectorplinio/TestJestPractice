// After calculate a area of form add to BBDD.

const { AddBBDD } = require("../../calculator/insertAreaBBDD");

describe("Add to BBDD", () => {
  test("Pass the name of collection and after insert into BBDD Square with area 25 and return OK", () => {
    const form = AddBBDD({Shape :"Square",Area: 25}, "areas");
    expect(form).toBe("OK");
  });
  test("Pass the name of collection and after insert into BBDD Rectangle with area 40 and return OK", () => {
    const form = AddBBDD({Shape :"Rectangle",Area: 40}, "areas");
    expect(form).toBe("OK");
  });
  test("Pass the name of collection and after insert into BBDD Triangle with area 10 and return OK ", () => {
    const form = AddBBDD({Shape :"Triangle",Area: 10}, "areas");
    expect(form).toBe("OK");
  });
  test("Pass the name of collection and after you dont pass any area and return error", () => {
    const form = AddBBDD({Shape :"Triangle"}, "areas");
    expect(form).toBeNull();
  });
});
