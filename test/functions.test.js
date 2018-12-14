const functions = require("../src/functions");

test("Is too short", function() {
  const expected = false;
  const result = functions.passwordCheck("A2345678");
  expect(result).toEqual(expected);
});

test("No capital letters", function() {
  const expected = false;
  const result = functions.passwordCheck("a23456789");
  expect(result).toEqual(expected);
});

test("No numbers", function() {
  const expected = false;
  const result = functions.passwordCheck("Abcdefghij");
  expect(result).toEqual(expected);
});

test("Password is valid", function() {
  const expected = true;
  const result = functions.passwordCheck("Ab34567890");
  expect(result).toEqual(expected);
});
