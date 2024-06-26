const prac = require('./index');

test("check if first letter is capitalized", () => {
  expect(prac.captitalize("tiger")).toBe("Tiger")
});