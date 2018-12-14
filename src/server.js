"use strict";

const express = require("express");
const bodyParser = require("body-parser");

// Constants
const PORT = 80;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(bodyParser.json());

app.get("/password_check/", (req, res) => {
  const validPassword = passwordCheck(req.body.password);
  res.send(validPassword);
  //   const text = req.body.password;
  //   res.send("Password route :" + " " + text);
});

app.get("/", (req, res) => {
  res.send("Hello Yet Another World\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function passwordCheck(password) {
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

  return passwordValid(password);
}
