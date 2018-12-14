"use strict";

const passwordRules = {
  length: 10,
  must_have_numbers: true,
  must_have_caps: true
};

const passwordReducer = (acc, item) => {
  if (!isNaN(item)) {
    acc.numbers = true;
    return acc;
  }
  if (item.toUpperCase() === item) {
    acc.caps = true;
    return acc;
  }
  return acc;
};

const passwordValid = password => {
  if (password.length > 9) {
    const checkRules = password
      .split("")
      .reduce(passwordReducer, { numbers: false, caps: false });
    return checkRules.numbers === true && checkRules.caps === true
      ? true
      : false;
  }
  return false;
};

const password = process.argv[2];

console.log(passwordValid(password));
