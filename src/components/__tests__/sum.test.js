const { sum } = require("../sum");

test("check sum of to positive numbers", () => {
  expect(sum(3, 4)).toBe(7);
});
